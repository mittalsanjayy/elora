# ELORA — Your Vision, Our Creation.
React + Vite + custom CSS agency website.

## Run
1. Install Node.js 18+ and open this folder in VS Code.
2. `npm install`
3. `npm run dev` → open the URL shown (usually http://localhost:5173)
4. `npm run build` → production files in `dist/` (`npm run preview` to test them)

## Edit
- **Brand name, slogan, WhatsApp number, email, phone, social links:** `src/data.jsx` → `brand`
- **Prices, packages, add-ons, currency:** `src/data.jsx` → `packages`, `extras`, `currency` (prices are illustrative)
- **Services, FAQs, process, demo projects (colours/text):** `src/data.jsx`
- **Colours, fonts, spacing:** CSS variables at the top of `src/styles/main.css`
- **Logo & favicon:** `src/components/Logo.jsx` and `public/favicon.svg`
- **Testimonials:** replace the placeholder in `src/components/Faq.jsx` with real feedback
- **Page title/description:** `index.html`

## Contact form
The form sends enquiries through EmailJS. In the EmailJS template `template_ckrqI6f`, set the recipient to `elora.webdevelopment@gmail.com`, keep the connected default sender address, and set Reply-To to `{{email}}`. The template can use `{{name}}`, `{{email}}`, `{{business_type}}`, `{{website_type}}`, `{{features}}`, `{{budget}}`, `{{deadline}}`, and `{{description}}`.

## Portfolio
Cards are concept demos made with CSS (no external images, so nothing can break). Clicking one jumps to the inquiry form.
