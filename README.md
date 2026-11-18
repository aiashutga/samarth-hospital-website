# Samarth Hospital — Website

A clean, static website for **Samarth Hospital**, a multi-speciality hospital in Pipariya, Madhya Pradesh, India.

## Tech Stack

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no external libraries, no CDNs, no remote fonts or images.
- Designed to be hosted on **GitHub Pages** (or any static host).
- Mobile-first and fully responsive.
- Relative paths used exclusively for assets and links.

## Folder Structure

```
samarth-hospital-website/
├── index.html              Home page
├── about.html              About the hospital
├── services.html           Departments (nav label: "Departments")
├── doctors.html            Our doctors
├── patient-education.html  Patient education overview
├── education-adult-vaccination.html Adult vaccination guide
├── bmw-management.html     Bio-medical waste management report
├── gallery.html            Photo gallery
├── contact.html            Contact, OPD timings, directions & call details
├── privacy.html            Privacy policy & medical disclaimer
├── css/
│   └── style.css           All styles (theme variables at top, launch mode at bottom)
├── js/
│   ├── main.js             Mobile menu toggle
│   ├── environment.js      Year tab switching & keyboard navigation for BMW management report
│   └── gallery.js          Photo gallery lightbox with progressive enhancement
├── assets/
│   ├── images/             Hospital logo, emblem, favicons, og-share, photos
│   │   ├── logo-full.png        Full logo (600x213, transparent, light bg only)
│   │   ├── logo-emblem.png      Emblem (384x384 circle)
│   │   ├── favicon.ico          Favicon (multi-size)
│   │   ├── favicon-32.png       Favicon 32x32 PNG
│   │   ├── apple-touch-icon.png Touch icon (180x180)
│   │   ├── og-share.png         Open Graph preview image (1200x630)
│   │   └── photos/              Hospital photos (18 JPGs) & PHOTOS.md
│   └── icons/              Department badges (96x96 SVG)
│       ├── dept-general-medicine.svg
│       ├── dept-orthopaedic.svg
│       └── dept-dental.svg
├── README.md               This file
└── TODO-before-launch.md   Checklist of items to complete before going live
```

## Logo & Asset Locations

- **Full logo**: `assets/images/logo-full.png` (600x213 transparent PNG). The tagline is dark grey (`#606062`), so this image must only be placed on light backgrounds (on dark backgrounds such as the footer, place it inside a white panel).
- **Emblem**: `assets/images/logo-emblem.png` (384x384 circular emblem). Used on the hero section on desktop screens at 8% opacity.
- **Favicons & Apple Touch Icon**: `assets/images/favicon.ico`, `assets/images/favicon-32.png`, and `assets/images/apple-touch-icon.png`.
- **Social Media Share Card**: `assets/images/og-share.png` (1200x630 PNG). Linked in `<head>` via `og:image` and `twitter:image`.
- **Department Badges**: `assets/icons/dept-general-medicine.svg`, `dept-orthopaedic.svg`, `dept-dental.svg`.

## Photos

Hospital photographs are stored in `assets/images/photos/`. See `assets/images/photos/PHOTOS.md` for the full inventory of photos, image dimensions, and captions.

**Privacy rule:** Faces of patients, visitors, and staff, as well as vehicle number plates, must be blurred in all public photos before use. Never publish unblurred photos of people. Do not edit, re-compress, or replace these photos without maintaining the same privacy protections.

### Doctor Portraits

Resident doctor portraits are stored in `assets/images/doctors/`:
- `dr-tanay-surjan.jpg` (600×750) — Dr. Tanay Surjan
- `dr-nidhi-surjan.jpg` (600×750) — Dr. Nidhi Surjan
- `dr-suyash-sharma.jpg` (600×750) — Dr. Suyash Sharma

**Portrait specification:**
- Dimensions: 600×750 pixels (4:5 aspect ratio).
- Composition: head-and-shoulders portrait.
- Eye line: eyes positioned at approximately 28% from the top of the frame.
- Face width: face width approximately 35% of the frame.
- Framing: all portraits must share the same eye line, chin position, and face size so they render consistently without CSS overrides.

## How to Change Colours (Design System)

All brand colours are defined as CSS variables at the top of **`css/style.css`** under the `:root` selector:

```css
:root {
  --navy: #0C3EAB;          /* primary: buttons, links */
  --navy-deep: #0A2A6B;     /* footer, dark sections, headings, text on yellow */
  --cyan: #078EBE;          /* accents, charts, icons only */
  --orange: #E36D04;        /* accents only: thin bars, underlines, big numbers */
  --yellow: #FFC906;        /* call-to-action buttons, highlights */
  --ink: #1B2433;           /* body text */
  --grey: #606062;          /* secondary text, same grey as logo tagline */
  --tint: #F3F8FD;          /* alternate section background */
  --line: #E3EAF3;          /* borders */
  --white: #FFFFFF;
  --orange-text: #A84A00;   /* only if orange-coloured text is needed on white */
}
```

To modify any colour, update the hex value in `:root`. Maintain WCAG 2.1 AA accessibility contrast standards (minimum 4.5:1 for body text, 3:1 for large text). Never use small white text on orange or cyan backgrounds.

## How to Switch Launch Mode On

Unconfirmed information is highlighted with the `.tbc` class and wrapped in `.tbc-block` containers.

If you need to launch the website before all placeholders (such as doctor photos or unconfirmed hours) are provided:

1. Open **`css/style.css`**.
2. Scroll to the very last line:
   ```css
   /* LAUNCH MODE: remove the comment marks to hide every unconfirmed item: .tbc-block{display:none !important;} */
   ```
3. Remove the `/*` and `*/` comment markers so that the rule becomes active:
   ```css
   .tbc-block{display:none !important;}
   ```
4. Save the file. Every element marked with `tbc-block` will immediately be hidden from display without breaking the layout.

## How to Add a Certificate

When a new certificate scan (such as the NABH Entry Level certificate) is ready to be published:

1. **Place the certificate files**:
   - Save the scan in `assets/certificates/` as a JPG image (e.g. `nabh-entry-level.jpg`).
   - Save the PDF beside it with the same base name (e.g. `nabh-entry-level.pdf`).
   - Compress the JPG image under 400 KB.

2. **Add or update the card in `about.html`**:
   - In the `#accreditations` section, locate the `.certificate-card` block (or copy an existing one for a new certificate).
   - Fill in the certificate number, valid from date, and valid until date.
   - Uncomment the thumbnail image and "View certificate" link.
   - Remove the `.tbc` and `.tbc-block` wrappers only after the client confirms the wording on the certificate.

## How to Preview Locally

1. Open the folder in your file manager.
2. Double-click **index.html** — it will open in your default browser.
3. Or use any local HTTP server, e.g. with Python:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. In the repo settings → Pages → set source to the **main** branch, root folder.
3. The site will be available at `https://<username>.github.io/samarth-hospital-website/`.
4. Once the custom domain `samarth-hospital.com` is configured, update the CNAME record and add a `CNAME` file.

## Before Going Live

See **[TODO-before-launch.md](TODO-before-launch.md)** for the full checklist of items that need to be completed, confirmed, or replaced before the site goes public.

## How to Add a New Year to the BMW Management Report

The hospital records its bio-medical waste quantities monthly under four colour categories (Yellow, Red, White, Blue) in an annual statement for 1 January to 31 December. Liquid waste treated in the in-house Effluent Treatment Plant (ETP) is recorded annually in litres.

When a new annual statement is prepared (e.g. for 2026):

1. **Add a new tab panel in `bmw-management.html`**:
   - Duplicate an existing `<div class="year-tabpanel" role="tabpanel" id="panel-YYYY" aria-labelledby="tab-YYYY">` block.
   - Update the year in headings, summary cards, report details box, and liquid waste box.
   - Update the 12 monthly table rows with the new data from the hospital statement.
   - Update the printed annual total, monthly average, and daily average rows in `<tfoot>`.
   - Update the Treatment & Disposal Summary table (Incineration vs. Autoclaving).
   - Update the monthly bar chart widths (`width: X%`) based on the highest month of that year.
   - Set `hidden` attribute on older panels if the new year is the default active tab.

2. **Add a new tab button in `bmw-management.html`**:
   - In `<div class="year-tabs-nav" role="tablist">`, add a new `<button role="tab" id="tab-YYYY" aria-controls="panel-YYYY" aria-selected="true" tabindex="0">YYYY</button>`.
   - Update the previous active tab button to `aria-selected="false"` and `tabindex="-1"`.

3. **Add the new year's row to the overview charts**:
   - In **`bmw-management.html`** ("Three Years at a Glance") and **`index.html`** ("BMW Management"):
     - In **Solid Waste (Chart 1)**: add an `.annual-bar-row` with the year label, stacked segments (`.bar-yellow`, `.bar-red`, `.bar-white`, `.bar-blue` with widths proportional to the chart max), and total kg.
     - In **Liquid Waste (Chart 2)**: add an `.annual-bar-row` with the year label, single `.liquid-bar-fill` (width proportional to chart max, e.g. 15,000 L), and total litres.

4. **Check all figures**: Always use the printed figures from the hospital's annual statement; mark calculated totals or averages with `*` and retain the explanatory note. Use neutral language without comparative adjectives (e.g. avoid words like "increase", "decrease", "improved", or "better").

## How to Add a Patient Education Item

1. **Create the guide page**:
   - Copy `education-adult-vaccination.html` to `education-<slug>.html` in the root folder.
   - Update the `<title>`, `<meta name="description">`, H1, Hindi subtitle, and content cards with the new guide's information.
   - Keep `<meta name="robots" content="noindex">` on the page until ready for launch.

2. **Add a card to `patient-education.html`**:
   - Add a card inside `.card-grid` under the relevant section.
   - Wrap the card in `.tbc-block` until the content is fully reviewed and confirmed by the hospital.

3. **Optionally add to the home page section**:
   - If prominent placement is required, add a summary card to the Patient Education section on `index.html`.

4. **Handling video guides**:
   - For a video, add a plain text link to the video page for now.
   - Tell the developer to build a lightweight click-to-load video player when the first video is chosen so that no remote YouTube thumbnails, scripts, or iframes load on page load.

## Licence

All rights reserved by Samarth Hospital. This codebase is not open-source.
