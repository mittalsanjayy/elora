import Reveal from './Reveal.jsx'
import { services, why } from '../data.jsx'
import { Palette, Smartphone, Heart, Users } from 'lucide-react'
const trust = [[Palette, 'Quality craft'], [Heart, 'Creative thinking'], [Smartphone, 'Responsive by default'], [Users, 'Client-first approach']]
export function Trust() {
  return (<section className="trust"><div className="wrap trust-in">{trust.map(([I, t]) => <div key={t}><I size={20}/><span>{t}</span></div>)}</div></section>)
}
export function Services() {
  return (<section id="services" className="section"><div className="wrap">
    <h2>Everything your website needs</h2><p className="sub">From a first landing page to a full online store, we cover design, build and launch.</p>
    <div className="grid g3">{services.map(([I, t, d], i) => <Reveal key={t} delay={(i % 3) * 70}><article className="card"><span className="ico"><I size={22}/></span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
  </div></section>)
}
export function Why() {
  return (<section id="about" className="section alt"><div className="wrap split">
    <div><h2>Why ELORA</h2><p className="sub left">We are a small, focused studio. You talk to the people building your site, and every decision is made for your brand.</p></div>
    <div className="why">{why.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
  </div></section>)
}
