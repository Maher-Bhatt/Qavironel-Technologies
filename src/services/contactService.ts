import { companyConfig } from '../data/company';

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  projectType: string;
  timeline: string;
  engagementModel: string;
  details: string;
  budget?: string;
  /** Honeypot spam trap: hidden from humans, filled by spam bots */
  hpField?: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  details?: string;
  general?: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  fallbackMailto?: string;
  fallbackWhatsApp?: string;
}

// RFC 5322-compliant simplified email pattern
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function validateContactForm(data: ContactFormData): {
  isValid: boolean;
  errors: ContactValidationErrors;
} {
  const errors: ContactValidationErrors = {};

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Your name must be at least 2 characters.';
  } else if (trimmedName.length > 100) {
    errors.name = 'Your name must be 100 characters or fewer.';
  }

  const trimmedEmail = data.email.trim();
  if (!trimmedEmail) {
    errors.email = 'Please enter a valid email address.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Enter an email address in the format name@example.com.';
  } else if (trimmedEmail.length > 120) {
    errors.email = 'Email address is too long.';
  }

  const trimmedDetails = data.details.trim();
  if (!trimmedDetails) {
    errors.details = 'Please add a little context so we know how to help.';
  } else if (trimmedDetails.length < 10) {
    errors.details = 'Please add at least 10 characters of detail.';
  } else if (trimmedDetails.length > 5000) {
    errors.details = 'Please keep your details to 5,000 characters or fewer.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildContactMailto(data: ContactFormData): string {
  const subject = encodeURIComponent(`Project inquiry — ${data.name.trim() || 'New contact'}`);
  const safeDetails = data.details.trim().length > 1500 
    ? data.details.trim().slice(0, 1500) + '...' 
    : data.details.trim();
  const body = encodeURIComponent(
    `Hello Qavironel team,\n\n` +
    `I would like to discuss a project with your studio.\n\n` +
    `Name: ${data.name.trim()}\n` +
    `Email: ${data.email.trim()}\n` +
    `Organization: ${data.organization?.trim() || 'N/A'}\n` +
    `Enquiry type: ${data.projectType}\n` +
    (data.budget ? `Investment Range: ${data.budget}\n` : '') +
    `Timeline: ${data.timeline}\n` +
    `Engagement Model: ${data.engagementModel}\n\n` +
    `Project details:\n${safeDetails}\n\n` +
    `Regards,\n${data.name.trim()}`
  );
  return `mailto:${companyConfig.email}?subject=${subject}&body=${body}`;
}

export function buildContactWhatsApp(data: ContactFormData): string {
  const message = encodeURIComponent(
    `Hello Qavironel team, I’m interested in discussing a project.\n\n` +
    `• Name: ${data.name.trim()}\n` +
    `• Email: ${data.email.trim()}\n` +
    `• Organization: ${data.organization?.trim() || 'N/A'}\n` +
    `• Type: ${data.projectType}\n` +
    (data.budget ? `• Budget: ${data.budget}\n` : '') +
    `• Timeline: ${data.timeline}\n\n` +
    `Details: ${data.details.trim()}`
  );
  return `${companyConfig.whatsappUrl}?text=${message}`;
}

// Client rate-limiting guard: prevent spamming endpoint repeatedly
let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN_MS = 8000;

export async function submitContactInquiry(
  data: ContactFormData,
  mountTimestamp: number = 0
): Promise<ContactSubmissionResult> {
  // 1. Client-side validation check
  const { isValid, errors } = validateContactForm(data);
  if (!isValid) {
    const firstErrorMessage = Object.values(errors)[0] || 'Validation failed. Please correct form fields.';
    return {
      success: false,
      message: firstErrorMessage,
    };
  }

  // 2. Spam Honeypot Check: if bot filled hpField or submitted in < 1.2 seconds
  if (data.hpField && data.hpField.trim().length > 0) {
    // Silently reject bot without throwing error
    return {
      success: false,
      message: 'Submission could not be verified.',
    };
  }

  const now = Date.now();
  if (mountTimestamp > 0 && now - mountTimestamp < 1200) {
    return {
      success: false,
      message: 'Submission rejected: automated bot behavior detected.',
    };
  }

  // 3. Client cooldown rate limit
  if (now - lastSubmissionTime < SUBMISSION_COOLDOWN_MS) {
    const waitSeconds = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - lastSubmissionTime)) / 1000);
    return {
      success: false,
      message: `Please wait ${waitSeconds} seconds before sending another request.`,
    };
  }

  const endpoint = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CONTACT_ENDPOINT) || '/api/contact';

  const mailtoFallback = buildContactMailto(data);
  const whatsappFallback = buildContactWhatsApp(data);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      organization: data.organization?.trim() || '',
      projectType: data.projectType,
      budget: data.budget || '',
      timeline: data.timeline,
      engagementModel: data.engagementModel,
      details: data.details.trim(),
      hpField: data.hpField || '',
      submittedAt: new Date().toISOString(),
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      lastSubmissionTime = Date.now();
      const resJson = await response.json().catch(() => ({}));
      return {
        success: true,
        message: resJson.message || 'Your project inquiry has been received. The Qavironel team will be in touch soon.',
      };
    }

    // Check specific error codes from endpoint
    let errMessage = 'We could not submit your request online at this moment.';
    try {
      const errJson = await response.json();
      if (errJson?.message) errMessage = errJson.message;
    } catch {
      // response wasn't JSON
    }

    return {
      success: false,
      message: `${errMessage} Please reach us directly via email or WhatsApp below.`,
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  } catch (err: unknown) {
    // Network failure, endpoint not deployed, or timeout
    return {
      success: false,
      message: 'We couldn’t connect to the inquiry form. Please send your message using one of the direct contact options below.',
      fallbackMailto: mailtoFallback,
      fallbackWhatsApp: whatsappFallback,
    };
  }
}
