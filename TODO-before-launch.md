# TODO — Before Launch Checklist

> Items marked **TBC** are placeholders in the HTML (highlighted in yellow).  
> Complete every item below before removing the `noindex` meta tag and going live.

---

## 🔴 Must Do (Blocking Launch)

- [ ] **Remove `<meta name="robots" content="noindex">`** from every HTML page once the site is ready to be indexed by search engines.
- [x] **Hospital logo & branding** — Assets placed in `assets/images/` (`logo-full.png`, `logo-emblem.png`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `og-share.png`) and updated across all page headers and footers.
- [ ] **Hospital motto / tagline** — Confirm "Saving lives with caring hands" as the official hospital motto/tagline.
- [ ] **Department descriptions approval** — Client / Dr. Tanay Surjan to review and approve the department descriptions for General Medicine, Orthopaedic Surgery, and Dental.
- [ ] **Department timings confirmation**:
  - Confirm which specific departments follow "OPD" timings (Mon–Sat 11:00 AM–2:30 PM, 6:00 PM–7:00 PM) vs "Other departments" (11:00 AM–7:00 PM).
  - Confirm active operating days for other departments (e.g. Monday to Saturday or 7 days).
  - Confirm Sunday and public holiday opening hours.
  - Confirm whether emergency / ambulance service is available 24/7 or specific hours.
- [ ] **Emergency / ambulance phone number** — Confirm if there is a separate dedicated emergency or ambulance contact number.
- [ ] **Doctor details** — Get each doctor's name, qualification, designation, and department to build out `doctors.html` and the home preview cards.
- [ ] **About page content** — Obtain official hospital history, mission, and registration/accreditation information from hospital administration.
- [ ] **Contact form access key** — Replace `YOUR_ACCESS_KEY_HERE` in `contact.html` with the real Web3Forms access key.
- [x] **Google Maps embed code** — Official Google Maps embed URL integrated on `contact.html`.
- [ ] **Privacy & disclaimer page** — Have the hospital review the text in `privacy.html`.
- [ ] **Bio-medical waste & environment disclosure approval** — Owner (Dr. Tanay Surjan) to approve the environment report wording and the publishing of the CBWTF membership number (1730 B).
- [ ] **State Pollution Control Board authorisation** — Confirm authorisation number and validity period from the hospital for the environment report.
- [ ] **Hospital photos** — Replace all grey "Photo coming soon" placeholder boxes with real photos of the hospital (building, reception, rooms, equipment, etc.).
- [ ] **Department photos** — Replace SVG badges (`assets/icons/*.svg`) with real photos of the departments/facilities when the owner provides them.
- [ ] **Launch mode switch** — If any unconfirmed items remain at launch time, activate Launch mode by uncommenting the rule at the bottom of `css/style.css` (`.tbc-block { display: none !important; }`).
- [ ] **Custom domain setup** — Configure DNS for `samarth-hospital.com` and add a `CNAME` file to the repo.

## 🟡 Should Do (Important but Not Blocking)

- [x] **Favicon & Apple Touch Icon** — Added to `assets/images/` and linked in `<head>` across all pages.
- [x] **Open Graph & Twitter meta tags** — Added to `<head>` on all pages with `og-share.png`.
- [ ] **Share preview verification** — Test the social share preview card on WhatsApp, Facebook, LinkedIn, and Twitter/X once the domain is live.
- [ ] **Insurance / government schemes** — If the hospital accepts Ayushman Bharat (PM-JAY) or other schemes, confirm and list them.
- [ ] **Pharmacy & lab info** — Confirm if the hospital has an in-house pharmacy or pathology lab.
- [ ] **Latest updates section** — Replace the sample placeholder updates on the home page with real announcements (real dates and real text).
- [x] **Footer description & OPD summary** — Added consistent OPD timing summary and hospital description in the footer across all pages.
- [x] **Contact page content** — Full address, OPD timings, directions link, map, and form configured on `contact.html`.
- [ ] **CBWTF pickup records** — Ask whether CBWTF weighment/pickup records exist to corroborate annual statement records.
- [ ] **Owner / management details** — Confirm if management details should appear on the About page.

## 🟢 Nice to Have (Post-Launch)

- [ ] **Google Search Console** — Verify the domain and submit the sitemap.
- [ ] **Google Business Profile** — Make sure the website URL is linked.
- [ ] **Annual environment report update** — Update `environment.html` and the home page waste figures each year when the new annual statement is generated.
- [ ] **Analytics** — Add a privacy-friendly analytics solution if needed.
- [ ] **WhatsApp link** — Add a "Message us on WhatsApp" button if the hospital uses WhatsApp for enquiries.
- [ ] **Multilingual (Hindi)** — Consider adding a Hindi version later.

---

*Last updated: 13 November 2026 (Phase 3A)*
