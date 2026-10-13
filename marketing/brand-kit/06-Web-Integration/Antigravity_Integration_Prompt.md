# Antigravity Integration Prompt — Qavironel Identity v2

Integrate the supplied Qavironel Identity & Marketing Kit v2 into the existing website without another broad redesign.

1. Read `05-Brand-Guidelines/Brand_Guidelines.md`.
2. Inspect current Git status and preserve unrelated work.
3. Replace old `public/brand/` logo raster files and the current Open Graph graphics with the approved files from `01-Logo/PNG` and `02-Platform-Banners/PNG`.
4. Use the transparent light logo for the default light theme and the transparent dark logo for the optional dark theme. Use the solid-background variants only for social/avatar contexts that need them.
5. Use `qavironel-mark-*` for favicon/social-avatar use; do not shrink a full horizontal lockup into a favicon.
6. Update `Logo.tsx`, `favicon.svg`, `apple-touch-icon`, `og-image`, relevant `index.html` metadata, and any social metadata references consistently.
7. Update theme tokens and Qavironel-owned decorative styling to Forest `#174C3A`, Deep Evergreen `#103629`, Warm Ivory `#F5F5F0`, Graphite `#191D1A`, Sage `#879B89`, Pale Sage `#E6ECE5`, Warm Grey `#737A73`, and Border `#D9DED7`. Remove legacy copper/orange and prohibited blue/purple/rainbow treatments only from Qavironel-owned UI. Do not recolour authentic third-party project screenshots.
8. Do not introduce a new layout or redesign the entire website in this task. Preserve existing pages and functionality.
9. Inspect and correct the homepage telemetry: mark any simulated values as illustrative or replace them with true measurements. Do not label fake values as live or certified.
10. Optimize image files and avoid loading every video on the initial viewport.
11. Verify the actual rendered page, logo on light/dark backgrounds, small favicon, Open Graph preview, and mobile crop.
12. Run the actual test suite and production build; report only commands/results that were actually run.
13. Show `git status --short` and a diff summary. Do not commit or push without explicit approval.

The new kit files are the source of truth for the brand. Keep the approved spelling exactly `Qavironel Technologies` and tagline `Ideas. Engineered.`.
