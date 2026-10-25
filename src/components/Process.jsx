import Reveal from './Reveal.jsx'
import { process } from '../data.jsx'
export default function Process() {
  return (<section className="section alt"><div className="wrap"><h2>Our process</h2><p className="sub">Six clear steps from first idea to long-term support.</p>
    <ol className="steps">{process.map(([t, d], i) => <li key={t}><Reveal delay={i * 60}><span className="dot">{i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal></li>)}</ol></div></section>)
}
