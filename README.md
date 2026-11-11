# Samarth Hospital — Website

A simple, static website for **Samarth Hospital**, a multi-speciality hospital in Pipariya, Madhya Pradesh, India.

## Tech Stack

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.
- Designed to be hosted on **GitHub Pages** (or any static host).
- Mobile-first and responsive.

## Folder Structure

```
samarth-hospital-website/
├── index.html              Home page
├── about.html              About the hospital
├── services.html           Departments & services
├── doctors.html            Our doctors
├── environment.html        Bio-medical waste management & environment report
├── contact.html            Contact & enquiry form
├── privacy.html            Privacy & disclaimer
├── css/
│   └── style.css           All styles (theme variables at the top)
├── js/
│   └── main.js             Mobile menu toggle, contact form handler
├── assets/
│   └── images/             Photos and logo (to be added)
├── README.md               This file
└── TODO-before-launch.md   Checklist of items to complete before going live
```

## How to Preview Locally

1. Open the folder in your file manager.
2. Double-click **index.html** — it will open in your default browser.
3. Or use any local server, e.g. with Python:
   ```
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
