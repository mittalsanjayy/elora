import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { nav } from '../data.jsx'
export default function Nav() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (<header className={`nav ${scrolled ? 'scrolled' : ''}`}><div className="wrap nav-in">
    <a href="#home" aria-label="ELORA home"><Logo /></a>
    <nav aria-label="Main" className={`links ${open ? 'open' : ''}`}>
      {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
      <a className="btn btn-primary sm" href="#contact" onClick={() => setOpen(false)}>Start a Project</a>
    </nav>
    <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>)
}
