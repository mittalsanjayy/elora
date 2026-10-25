import { Store, ShoppingCart, User, Rocket, Code2, Paintbrush, Globe, Server, Wrench, Search, MessageCircle, Sparkles } from 'lucide-react'

// ✏️ EDIT YOUR BRAND, CONTACT DETAILS AND LINKS HERE
export const brand = {
  name: 'ELORA', slogan: 'Your Vision, Our Creation.',
  whatsapp: '9986744631', // country code + number, digits only
  email: 'elora.webdevelopment@gmail.com', phone: '9986744631', location: 'Bengaluru, India',
  social: [{ label: 'Instagram', href: '**https://www.instagram.com/elora.webdesign/**' }, { label: 'LinkedIn', href: 'https://linkedin.com' }, { label: 'GitHub', href: 'https://github.com/mittalsanjayy' }],
}
export const nav = [['Home', '#home'], ['Services', '#services'], ['Our Work', '#work'], ['About', '#about'], ['Contact', '#contact']]

export const services = [
  [Store, 'Business websites', 'Clear, fast sites for shops, restaurants, salons, clinics and local businesses.'],
  [ShoppingCart, 'E-commerce', 'Product catalogues, carts, checkout integration and order management, scoped per project.'],
  [User, 'Portfolio websites', 'Showcase sites for developers, freelancers, creators and professionals.'],
  [Rocket, 'Startup & company sites', 'Landing pages and company websites that explain your idea in seconds.'],
  [Code2, 'Custom web apps', 'Tailor-made web applications built around how your team works.'],
  [Paintbrush, 'Redesign & UI/UX', 'Modernise an existing site with better layout, flow and usability.'],
  [Globe, 'Domain setup', 'Help choosing, registering and connecting your domain name.'],
  [Server, 'Hosting & deployment', 'Help putting your site online on reliable hosting.'],
  [Wrench, 'Maintenance & support', 'Updates, fixes and technical support after launch.'],
  [Search, 'SEO foundations', 'Clean structure, metadata and speed so search engines can understand your site.'],
  [MessageCircle, 'Forms & WhatsApp', 'Contact forms, lead capture and WhatsApp buttons that make it easy to reach you.'],
  [Sparkles, 'Planning & dashboards', 'AI-assisted project planning and client dashboards — on our roadmap.'],
]
export const projects = [
  ['Restaurant', 'Saffron & Salt', 'Menu, reservations and a warm, appetising look.', '#f59e0b', '#7c2d12'],
  ['Clothing store', 'Northline Apparel', 'Lookbook-style catalogue with a cart flow.', '#e879f9', '#4c1d95'],
  ['Local business', 'BrightPath Clinic', 'Trust-first layout with easy booking calls.', '#34d399', '#064e3b'],
  ['Portfolio', 'Mira Okafor', 'A bold case-study portfolio for a designer.', '#60a5fa', '#1e1b4b'],
  ['Startup', 'Lumen Analytics', 'A product landing page built to convert.', '#a78bfa', '#312e81'],
]
export const why = [['Custom design', 'Every site is designed around your brand — no recycled templates.'], ['Responsive development', 'Layouts that work on phones, tablets and desktops.'], ['Clear communication', 'Plain-language updates, so you always know what happens next.'], ['Ongoing support', 'Optional maintenance after launch, agreed up front.']]
export const process = [['Discover', 'We learn your goals, audience and ideas.'], ['Plan', 'Pages, features and timeline are agreed.'], ['Design', 'You see the look before we build it.'], ['Develop', 'We build, test and refine on every device.'], ['Launch', 'Domain, hosting and go-live checks.'], ['Support', 'Updates and help when you need them.']]
// ✏️ ILLUSTRATIVE PRICES — edit freely
export const currency = '₹'
export const packages = [
  { id: 'basic', name: 'Business Starter', price: 8999, blurb: 'A simple site for a small business.', items: ['Up to 5 pages', 'Responsive design', 'Contact form', 'Basic SEO setup'] },
  { id: 'pro', name: 'Professional', price: 9999, blurb: 'A fuller site with custom design.', items: ['Up to 10 pages', 'Custom UI design', 'Animations & polish', 'WhatsApp & lead forms'], featured: true },
  { id: 'shop', name: 'E-commerce', price: 19999, blurb: 'An online store foundation.', items: ['Product catalogue', 'Cart & checkout integration', 'Order management setup', 'Responsive design'] },
]
export const extras = [['Extra page', 150], ['Blog / news section', 250], ['Advanced SEO', 300], ['Domain & hosting setup', 120], ['Monthly maintenance (per month)', 80], ['Custom web app module', 800]]
export const faqs = [
  ['How much does a website cost?', 'Prices depend on pages, features and design. The packages on this site are illustrative starting points; custom projects receive a tailored quote.'],
  ['How long does a project take?', 'Small sites often take a few weeks; larger sites and stores take longer. We confirm a timeline after the planning stage.'],
  ['How many revisions are included?', 'Revision rounds are agreed in your quote before work starts.'],
  ['Do you provide hosting?', 'We help you choose and set up hosting. Hosting fees are paid to the hosting provider.'],
  ['Can you help with my domain?', 'Yes. We can advise on a name and help register and connect it to your site.'],
  ['Do you offer maintenance?', 'Yes, as an optional service agreed separately after launch.'],
  ['How do I start a project?', 'Fill in the project form below or message us on WhatsApp. We reply with next steps and questions.'],
]
export const siteTypes = ['Business', 'E-commerce', 'Portfolio', 'Startup / landing page', 'Web app', 'Redesign', 'Other']
export const featureList = ['Contact form', 'WhatsApp button', 'Online store', 'Blog', 'SEO setup', 'Booking', 'Admin dashboard', 'Domain & hosting help']
export const budgets = ['Under ₹8,999', '₹9,999 – ₹9,999', '₹15,000 – ₹19,999', '₹25,999+', 'Not sure yet']
