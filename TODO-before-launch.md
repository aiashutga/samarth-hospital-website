# TODO — Before Launch Checklist

> Items marked **TBC** are placeholders in the HTML (highlighted in yellow).  
> Complete every item below before removing the `noindex` meta tag and going live.

---

## 🔴 Must Do (Blocking Launch)

- [ ] **Remove `<meta name="robots" content="noindex">`** from every HTML page once the site is ready to be indexed by search engines.
- [x] **Hospital logo & branding** — Assets placed in `assets/images/` (`logo-full.png`, `logo-emblem.png`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `og-share.png`) and updated across all page headers and footers.
- [x] **Hospital tagline, motto, vision & mission** — Added to `about.html` as provided by client (English & Hindi).
- [ ] **Hindi text review** — Hindi booking, vision and mission text to be checked by someone who reads Hindi.
- [ ] **Department descriptions review** — Client / Dr. Tanay Surjan to review the department descriptions for General Medicine, Orthopaedic Surgery, and Dental.
- [ ] **Department timings confirmation**:
  - Confirm which specific departments follow "OPD" timings (Mon–Sat 11:00 AM–2:30 PM, 6:00 PM–7:00 PM) vs "Other departments" (11:00 AM–7:00 PM).
  - Confirm active operating days for other departments (e.g. Monday to Saturday or 7 days).
  - Confirm Sunday and public holiday opening hours.
- [ ] **Emergency / ambulance phone number** — Confirm if there is a separate dedicated emergency or ambulance contact number.
- [ ] **Doctor details** — Get each doctor's name, qualification, designation, and department to build out `doctors.html` and the home preview cards.
- [ ] **Doctors link hidden in launch mode** — Doctors link hidden in launch mode: when doctor details arrive, fill doctors.html and remove the tbc-block class from the nav and footer items.
- [ ] **About page content** — Obtain hospital history, mission, and registration details from hospital administration.
- [x] **Google Maps embed code** — Google Maps embed URL integrated on `contact.html`.
- [ ] **Privacy & disclaimer page** — Have the hospital review the text in `privacy.html`.
- [ ] **3-Year BMW Management & Liquid Waste disclosure** — Client / Dr. Tanay Surjan to review the 3-year bio-medical waste figures (2023, 2024, 2025) and liquid waste reporting wording on `bmw-management.html` and `index.html`, including publishing the CBWTF membership number (1730 B).
- [ ] **Liquid waste measurement clarification** — Clarify with hospital administration what exactly the liquid waste figure counts (e.g. liquid waste from OT, lab, laundry, floor washing) and how it is measured (flow meter readings, batch tank logs, or estimates).
- [ ] **ETP technical details & water testing** — Obtain technical specifications for the in-house Effluent Treatment Plant (ETP), including daily treatment capacity, disinfection method (e.g., sodium hypochlorite dosing), and periodic laboratory test reports for garden use.
- [ ] **State Pollution Control Board authorisation number** — Confirm State Pollution Control Board authorisation number and validity period from the hospital for the BMW management report.
- [x] **Hospital photos** — Processed photos placed in `assets/images/photos/` and displayed across home, gallery, and BMW management pages.
- [ ] **Photo room-name corrections** — Client to send remaining room-name corrections.
- [ ] **Blurred reception & waiting hall photos confirmation** — Client to confirm he is okay with the blurred reception and waiting hall photos.
- [ ] **Original-quality photos request** — Ask the client for original-quality photos (sent as "Document" on WhatsApp). Keep the same file names, and blur faces and number plates again before use.
- [ ] **Department photos** — All three departments (General Medicine, Orthopaedic Surgery, Dental) use icons and are waiting for real department photos to replace the SVG badges (`assets/icons/*.svg`).
- [ ] **Launch mode switch** — If any unconfirmed items remain at launch time, activate Launch mode by uncommenting the rule at the bottom of `css/style.css` (`.tbc-block { display: none !important; }`).
- [x] **Custom domain setup** — Custom domain `samarth-hospital.com` configured on GitHub Pages with `CNAME` in repo.

## 🟡 Should Do (Important but Not Blocking)

- [x] **Favicon & Apple Touch Icon** — Added to `assets/images/` and linked in `<head>` across all pages.
- [x] **Open Graph & Twitter meta tags** — Added to `<head>` on all pages with `og-share.png`.
- [ ] **Share preview check** — Test the social share preview card on WhatsApp, Facebook, LinkedIn, and Twitter/X once the domain is live.
- [ ] **Insurance / government schemes** — If the hospital accepts Ayushman Bharat (PM-JAY) or other schemes, confirm and list them.
- [ ] **Pharmacy & lab info** — Confirm if the hospital has an in-house pharmacy or pathology lab.
- [ ] **Latest updates section** — Replace the sample placeholder updates on the home page with real announcements (real dates and real text).
- [x] **Footer description & OPD summary** — Added consistent OPD timing summary and hospital description in the footer across all pages.
- [x] **Contact page content** — Full address ("Maharana Pratap Ward, Sandiya Road, Pipariya, Madhya Pradesh 461775"), OPD timings, call card, booking instructions card, directions link, and map configured on `contact.html`.
- [ ] **CBWTF pickup records** — Ask whether CBWTF weighment/pickup records exist to corroborate annual statement records.
- [ ] **Owner / management details** — Confirm if management details should appear on the About page.

## 🟢 Nice to Have (Post-Launch)

- [ ] **Google Search Console** — Set up the domain and submit the sitemap.
- [ ] **Google Business Profile** — Make sure the website URL is linked.
- [ ] **Annual BMW management report update** — Update `bmw-management.html` and the home page waste figures each year when the new annual statement is generated.
- [ ] **Analytics** — Add a privacy-friendly analytics solution if needed.
- [ ] **WhatsApp link** — Add a "Message us on WhatsApp" button if the hospital uses WhatsApp for enquiries.
- [ ] **Multilingual (Hindi)** — Consider adding a Hindi version later.

---

*Last updated: 15 November 2026 (Phase 4b)*
