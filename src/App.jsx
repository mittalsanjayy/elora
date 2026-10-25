
import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { Trust, Services, Why } from './components/Services.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Faq, { Testimonials } from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer, { FinalCta } from './components/Footer.jsx'
import WhatsAppButton from './components/whatsAppButton.jsx'

export default function App() {
  const [preset, setPreset] = useState('')

  const pick = (t) => {
    setPreset(t)
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <>
      <a className="skip" href="#services">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Work onPick={pick} />
        <Why />
        <Process />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact presetType={preset} />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}