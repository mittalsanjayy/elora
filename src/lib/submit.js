import { brand } from '../data.jsx'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_iiegrfw'
const TEMPLATE_ID = 'template_ckqrl6f'
const PUBLIC_KEY = 'z4pBCVW4ou3T8XEHg'

export async function submitInquiry(data) {
  const parameters = {
    name: data.name.trim(),
    email: data.email.trim(),
    business_type: data.business.trim(),
    website_type: data.site || '',
    features: data.features.join(', '),
    budget: data.budget || '',
    deadline: data.deadline || '',
    description: data.message.trim(),
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, parameters, PUBLIC_KEY)
}

export const whatsappUrl = (text = 'Hello ELORA, I would like to start a project.') => `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`
