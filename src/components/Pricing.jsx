import { useState } from 'react'
import { Check } from 'lucide-react'
import { packages, extras, currency } from '../data.jsx'
export function Estimator() {
  const [pkg, setPkg] = useState('pro'); const [sel, setSel] = useState([])
  const base = packages.find(p => p.id === pkg).price
  const total = base + sel.reduce((s, i) => s + extras[i][1], 0)
  const toggle = i => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])
  return (<div className="est glass"><h3>Budget estimator</h3><p className="muted">A rough guide only. Your final quote depends on your project.</p>
    <label className="field">Package<select value={pkg} onChange={e => setPkg(e.target.value)}>{packages.map(p => <option key={p.id} value={p.id}>{p.name} — {currency}{p.price}</option>)}</select></label>
    <fieldset className="checks"><legend>Add-ons</legend>{extras.map(([l, p], i) => <label key={l}><input type="checkbox" checked={sel.includes(i)} onChange={() => toggle(i)}/>{l} <b>+{currency}{p}</b></label>)}</fieldset>
    <div className="total" aria-live="polite"><span>Estimated total</span><strong>{currency}{total.toLocaleString()}</strong></div></div>)
}
export default function Pricing() {
  return (<section id="pricing" className="section"><div className="wrap"><h2>Starter packages</h2>
    <p className="sub">Illustrative prices you can edit. Custom projects always receive a tailored quote.</p>
    <div className="grid g3">{packages.map(p => <article key={p.id} className={`card price ${p.featured ? 'feat' : ''}`}><h3>{p.name}</h3><p className="amt">{currency}{p.price}<small> from</small></p><p>{p.blurb}</p>
      <ul>{p.items.map(i => <li key={i}><Check size={16}/>{i}</li>)}</ul><a className="btn btn-ghost" href="#contact">Ask about this</a></article>)}</div>
    <Estimator/></div></section>)
}
