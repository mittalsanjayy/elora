import Logo from './Logo.jsx'
import { brand, nav, services } from '../data.jsx'
export function FinalCta() {
  return (<section className="final"><div className="wrap"><h2>Your idea deserves a website this good.</h2><p className="lead">Tell us what you are building and we will help you shape it.</p><a className="btn btn-primary" href="#contact">Start Your Project</a></div></section>)
}
export default function Footer() {
  return (<footer className="footer"><div className="wrap foot-grid">
    <div><Logo/><p className="muted">{brand.slogan}</p><p className="muted">{brand.email}<br/>{brand.phone}<br/>{brand.location}</p></div>
    <div><h4>Navigate</h4>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
    <div><h4>Services</h4>{services.slice(0, 5).map(s => <a key={s[1]} href="#services">{s[1]}</a>)}</div>
    <div><h4>Follow</h4>{brand.social.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>)}</div>
  </div><p className="copy wrap">© {new Date().getFullYear()} {brand.name}. All rights reserved.</p></footer>)
}
