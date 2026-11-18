# Website Maintenance Guide

This guide is written in plain English for anyone maintaining the Samarth Hospital website.

---

## 1. Where Each Fact Lives

When any hospital information changes (such as the phone number, clinic hours, or address), update every file listed in the table below to keep the website consistent.

| Fact | Current Value | Files Containing This Fact |
|---|---|---|
| **Phone number** | `+91 86025 65053`<br>(tel links: `8602565053`) | `index.html`<br>`about.html`<br>`services.html`<br>`doctors.html`<br>`patient-education.html`<br>`education-adult-vaccination.html`<br>`bmw-management.html`<br>`gallery.html`<br>`contact.html`<br>`privacy.html`<br>`404.html`<br>`environment.html` |
| **Address** | `Maharana Pratap Ward, Sandiya Road, Pipariya, Madhya Pradesh 461775` | `index.html` (Hero quick-info, Footer, Schema JSON-LD)<br>`about.html` (Footer)<br>`services.html` (Footer)<br>`doctors.html` (Footer)<br>`patient-education.html` (Footer)<br>`education-adult-vaccination.html` (Footer)<br>`bmw-management.html` (Footer)<br>`gallery.html` (Footer)<br>`contact.html` (Header card, Footer)<br>`privacy.html` (Footer)<br>`404.html` (Footer)<br>`environment.html` (Footer) |
| **OPD Timings** | `Monday to Saturday, 11:00 AM to 2:30 PM and 6:00 PM to 7:00 PM` | `index.html` (Quick info & Footer)<br>`about.html` (Footer)<br>`services.html` (Footer)<br>`doctors.html` (Footer)<br>`patient-education.html` (Footer)<br>`education-adult-vaccination.html` (Footer)<br>`bmw-management.html` (Footer)<br>`gallery.html` (Footer)<br>`contact.html` (Timings card & Footer)<br>`privacy.html` (Footer)<br>`404.html` (Footer)<br>`environment.html` (Footer) |
| **Email address** | `Samarthhospitalpipariya@gmail.com` | `index.html` (Footer)<br>`about.html` (Footer)<br>`services.html` (Footer)<br>`doctors.html` (Footer)<br>`patient-education.html` (Footer)<br>`education-adult-vaccination.html` (Footer)<br>`bmw-management.html` (Footer)<br>`gallery.html` (Footer)<br>`contact.html` (Contact card & Footer)<br>`privacy.html` (Footer)<br>`404.html` (Footer)<br>`environment.html` (Footer) |
| **Tagline** | `Saving lives with caring hands` | `index.html` (Hero & Footer logo alt)<br>`about.html` (Footer logo alt & Vision section)<br>`services.html` (Footer logo alt)<br>`doctors.html` (Footer logo alt)<br>`patient-education.html` (Footer logo alt)<br>`education-adult-vaccination.html` (Footer logo alt)<br>`bmw-management.html` (Footer logo alt)<br>`gallery.html` (Footer logo alt)<br>`contact.html` (Footer logo alt)<br>`privacy.html` (Footer logo alt)<br>`404.html` (Footer logo alt)<br>`environment.html` (Header & Footer logo alt) |

---

## 2. How To

### How to Change the Phone Number or Timings
1. Open each file listed in the table above.
2. In the header, sticky mobile bar, contact cards, and footer:
   - For phone number: update both the visible text (`+91 86025 65053`) and the `href="tel:+918602565053"` attribute. On `index.html`, also update the telephone property in the `<script type="application/ld+json">` tag.
   - For timings: update the OPD timings paragraph in the quick-info section (`index.html`), the contact card (`contact.html`), and the footer summary across all pages.
3. Test every page locally or in staging to ensure all links trigger phone calls properly.

### How to Add or Edit a Doctor
1. **Resident Doctors**:
   - Save the portrait image in `assets/images/doctors/` (600×750 pixels, 4:5 aspect ratio, head-and-shoulders crop matching the eye line and chin framing of existing portraits).
   - In `doctors.html` under the `#resident-doctors-heading` section, add or update a `.doctor-card` with the doctor's name, qualifications, speciality, experience, timing note, and portrait image.
   - In `index.html` under the `#doctors-heading` section, add or update the corresponding card using the `.doctor-photo-frame-sm` thumbnail frame.
2. **Visiting Consultants**:
   - In `doctors.html` under the `#visiting-consultants-heading` section, update the consultant's card with their name, qualifications, speciality, schedule, and avatar icon.

### How to Add a Photo to the Gallery
1. **Privacy requirement**: All photos showing patients, visitors, staff faces, or vehicle number plates must be blurred before publishing. Never upload unblurred photos of people.
2. Save the compressed JPG image into `assets/images/photos/` with descriptive naming (e.g. `icu.jpg`).
3. In `gallery.html`, add a `<figure class="gallery-card">` under the matching category section with the image path, dimensions, descriptive alt text, and caption.
4. If the photo should also appear on the home page, add a tile in `index.html` under "A look inside the hospital".

### How to Add a Patient Education Item
Follow the step-by-step instructions in the [README.md](README.md#how-to-add-a-patient-education-item):
1. Copy `education-adult-vaccination.html` to `education-<slug>.html` in the root folder.
2. Update title, description, H1, Hindi subtitle, and content cards.
3. Add a card to `patient-education.html` inside `.card-grid` (wrap in `.tbc-block` until confirmed).
4. Optionally add a summary card to `index.html`.

### How to Update the Footer Year
In December or January of each year:
1. Search across all HTML files for `&copy; 2026 Samarth Hospital`.
2. Replace `2026` with the new year (e.g. `&copy; 2027 Samarth Hospital`) across all 11 pages.

---

## 3. Launch Switch Checklist (Do NOT Execute Yet)

When the hospital administration approves public indexing and all pending clinical information is confirmed:

1. **Remove `noindex`**:
   Remove `<meta name="robots" content="noindex">` from the `<head>` of all 11 pages:
   - `index.html`
   - `about.html`
   - `services.html`
   - `doctors.html`
   - `patient-education.html`
   - `education-adult-vaccination.html`
   - `bmw-management.html`
   - `gallery.html`
   - `contact.html`
   - `privacy.html`
   - `404.html`
2. **Enable Launch Mode in CSS (if unconfirmed placeholders remain)**:
   In `css/style.css` at line 2262 (the last line of the file), uncomment the launch mode rule:
   ```css
   .tbc-block{display:none !important;}
   ```
   This will cleanly hide unconfirmed placeholder cards (such as incomplete guides or unconfirmed hours) without breaking page layouts.
3. **Deploy Launch `robots.txt`**:
   Create `robots.txt` in the root folder with:
   ```text
   User-agent: *
   Allow: /

   Sitemap: https://samarth-hospital.com/sitemap.xml
   ```
4. **Submit Sitemap in Google Search Console**:
   Log into Google Search Console for `samarth-hospital.com`, navigate to Sitemaps, and submit `https://samarth-hospital.com/sitemap.xml`.
5. **Update Checklist**:
   Mark items in `TODO-before-launch.md` as completed.

---

## 4. Routine Checks

### Monthly Checks
- **Page checks**: Open each page in a browser (mobile and desktop) to ensure images and text load cleanly.
- **Call buttons**: Tap the call buttons (`+91 86025 65053`) to verify phone dialing works on mobile devices.
- **Deployment health**: Check the GitHub Pages settings in the repository to ensure builds deploy with green checkmarks.
- **Domain registration**: Check the domain renewal date on GoDaddy to ensure `samarth-hospital.com` does not expire unexpectedly.

### Yearly Checks
- **Footer copyright**: Update the copyright year in the footer across all HTML files.
- **BMW Management report**: Update `bmw-management.html` and the summary on `index.html` with the latest annual waste treatment records.

