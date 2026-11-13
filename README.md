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
├── environment.html        Bio-medical waste management & environment report
├── contact.html            Contact, OPD timings, map & enquiry form
├── privacy.html            Privacy policy & medical disclaimer
├── css/
│   └── style.css           All styles (theme variables at top, launch mode at bottom)
├── js/
│   └── main.js             Mobile menu toggle, contact form handler
├── assets/
│   ├── images/             Hospital logo, emblem, favicons, og-share
│   │   ├── logo-full.png        Full logo (600x213, transparent, light bg only)
│   │   ├── logo-emblem.png      Emblem (384x384 circle)
│   │   ├── favicon.ico          Favicon (multi-size)
│   │   ├── favicon-32.png       Favicon 32x32 PNG
│   │   ├── apple-touch-icon.png Touch icon (180x180)
│   │   └── og-share.png         Open Graph preview image (1200x630)
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

## How to Update the Environment Report Each Year

The hospital records its bio-medical waste quantities monthly under four colour categories (Yellow, Red, White, Blue) and files an annual return for 1 January to 31 December.

When a new annual statement is prepared:
1. Open **`environment.html`**:
   - Update the period in the summary paragraph, header subtitle, and "Report Details" box.
   - Update the 12 monthly table rows with the new quantities (Yellow, Red, White, Blue, Total).
   - Update the printed annual total, monthly average, and daily average rows in the table footer (`<tfoot>`).
   - Update the Treatment & Disposal Summary table (Incineration vs. Autoclaving).
   - Update the monthly bar chart widths and labels (adjust highest/lowest month tags).
   - Update the percentage shares in the category stacked bar and text legend.
2. Open **`index.html`**:
   - Update the four key-figure cards in the "Environment Protection & Bio-Medical Waste Management" section (Period, Approx. total, Treatment, Handed to).
   - Update the category distribution stacked bar and text legend.
3. Verify figures: Always use the printed figures from the official annual statement; mark calculated totals/percentages with `*` and keep the explanatory note.

## Licence

All rights reserved by Samarth Hospital. This codebase is not open-source.
