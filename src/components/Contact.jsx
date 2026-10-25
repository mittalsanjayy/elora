import { useState, useEffect, useRef } from 'react'
import { Loader2, MessageCircle, Mail, Phone } from 'lucide-react'
import { brand, siteTypes, featureList, budgets } from '../data.jsx'
import { submitInquiry, whatsappUrl } from '../lib/submit.js'
const empty = { name: '', email: '', business: '', site: siteTypes[0], features: [], budget: budgets[4], deadline: '', message: '' }
export default function Contact({ presetType }) {
  const [f, setF] = useState(empty); const [err, setErr] = useState({}); const [state, setState] = useState('idle')
  const [sendError, setSendError] = useState('')
  const sending = useRef(false)
  useEffect(() => { if (presetType) setF(x => ({ ...x, business: x.business || presetType })) }, [presetType])
  const set = (k, v) => setF(x => ({ ...x, [k]: v }))
  const validate = () => { const e = {}
    if (f.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = 'Enter a valid email address.'
    if (!f.business.trim()) e.business = 'Tell us your business type.'
    if (f.message.trim().length < 15) e.message = 'Describe your project in at least 15 characters.'
    return e }
  const send = async ev => {
    ev.preventDefault()
    if (sending.current) return
    const e = validate()
    setErr(e)
    if (Object.keys(e).length) return

    sending.current = true
    setState('loading')
    try {
      await submitInquiry(f)
      setF({ ...empty })
      setSendError('')
      setState('done')
    } catch (error) {
      console.error('EmailJS enquiry submission failed:', error)
      const status = typeof error?.status === 'number' ? `HTTP ${error.status}` : ''
      const details = typeof error?.text === 'string' ? error.text : error instanceof Error ? error.message : ''
      setSendError([status, details].filter(Boolean).join(': ') || 'No response details; check the browser network connection.')
      setState('error')
    } finally {
      sending.current = false
    }
  }
  const startAnother = () => {
    setF({ ...empty, business: presetType || '' })
    setErr({})
    setSendError('')
    setState('idle')
  }
  const E = ({ k }) => err[k] ? <span className="err" role="alert">{err[k]}</span> : null
  return (<section id="contact" className="section"><div className="wrap split contact">
    <div><h2>Start a project</h2><p className="sub left">Tell us about your idea. The more detail, the better we can help.</p>
      <ul className="contact-list"><li><MessageCircle size={18}/><a href={whatsappUrl()} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li><li><Mail size={18}/><a href={`mailto:${brand.email}`}>{brand.email}</a></li><li><Phone size={18}/>{brand.phone}</li></ul></div>
    {state === 'done' ? <div className="glass ok" role="status"><h3>Thank you!</h3><p>Your enquiry has been sent successfully. We'll contact you soon.</p>
      <button className="btn btn-ghost" onClick={startAnother}>Send another enquiry</button></div>
    : <form className="glass form" onSubmit={send} noValidate>
      <label className="field">Name<input value={f.name} onChange={e => set('name', e.target.value)} aria-invalid={!!err.name} autoComplete="name"/><E k="name"/></label>
      <label className="field">Email<input type="email" value={f.email} onChange={e => set('email', e.target.value)} aria-invalid={!!err.email} autoComplete="email"/><E k="email"/></label>
      <label className="field">Business type<input value={f.business} onChange={e => set('business', e.target.value)} placeholder="e.g. Bakery, clinic, freelancer" aria-invalid={!!err.business}/><E k="business"/></label>
      <label className="field">Website needed<select value={f.site} onChange={e => set('site', e.target.value)}>{siteTypes.map(s => <option key={s}>{s}</option>)}</select></label>
      <fieldset className="checks full"><legend>Features</legend>{featureList.map(x => <label key={x}><input type="checkbox" checked={f.features.includes(x)} onChange={() => set('features', f.features.includes(x) ? f.features.filter(i => i !== x) : [...f.features, x])}/>{x}</label>)}</fieldset>
      <label className="field">Approximate budget<select value={f.budget} onChange={e => set('budget', e.target.value)}>{budgets.map(s => <option key={s}>{s}</option>)}</select></label>
      <label className="field">Deadline<input type="date" value={f.deadline} onChange={e => set('deadline', e.target.value)}/></label>
      <label className="field full">Project description<textarea rows="4" value={f.message} onChange={e => set('message', e.target.value)} aria-invalid={!!err.message}/><E k="message"/></label>
      {state === 'error' && <p className="err full" role="alert">We couldn't send your enquiry. Please check your connection and try again, or email us at {brand.email}.</p>}
      {state === 'error' && import.meta.env.DEV && <p className="err full">EmailJS diagnostic: {sendError}</p>}
      <button className="btn btn-primary full" disabled={state === 'loading'}>{state === 'loading' ? <><Loader2 className="spin" size={18}/> Sending…</> : 'Send my enquiry'}</button>
    </form>}
  </div></section>)
}
