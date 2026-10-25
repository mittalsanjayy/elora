import { ExternalLink } from 'lucide-react'

const concepts = [
  {
    name: 'Savora',
    category: 'Restaurant Website',
    description: 'Elegant restaurant homepage featuring food photography, a menu, and reservation-style design.',
    headline: 'A table worth gathering around',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85',
    accent: '#e8a45b',
  },
  {
    name: 'Vellure',
    category: 'Fashion & Clothing',
    description: 'Premium clothing store with stylish product photography and a modern shopping layout.',
    headline: 'Wear your own story',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1100&q=85',
    accent: '#e9a7c6',
  },
  {
    name: 'CarePlus',
    category: 'Clinic Website',
    description: 'Clean, professional healthcare design with doctor profiles and appointment information.',
    headline: 'Care that puts you first',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1100&q=85',
    accent: '#78cbb7',
  },
  {
    name: 'Nestora',
    category: 'Real Estate Website',
    description: 'Luxury property listings with beautiful property images and modern layouts.',
    headline: 'Find room for what matters',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1100&q=85',
    accent: '#d4b477',
  },
  {
    name: 'Aura Studio',
    category: 'Salon Website',
    description: 'Elegant beauty salon design featuring hairstyles, treatments, and a premium booking-style layout.',
    headline: 'A little time, all yours',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1100&q=85',
    accent: '#e6a0c3',
  },
]

function Card({ concept, onPick }) {
  return (
    <button
      className="work"
      style={{ '--project-accent': concept.accent }}
      onClick={() => onPick(concept.category)}
      aria-label={`${concept.name}, ${concept.category} concept — start a similar project`}
    >
      <div className="work-preview" aria-hidden="true">
        <div className="preview-chrome"><i/><i/><i/><span>www.{concept.name.toLowerCase().replaceAll(' ', '')}.com</span></div>
        <div className="preview-page">
          <img src={concept.image} alt="" loading="lazy" />
          <div className="preview-shade" />
          <div className="preview-nav"><strong>{concept.name}</strong><span>ABOUT　 SERVICES　 CONTACT</span><b>BOOK NOW</b></div>
          <div className="preview-copy"><span>WELCOME TO {concept.name.toUpperCase()}</span><strong>{concept.headline}</strong><i>DISCOVER MORE　↗</i></div>
        </div>
      </div>
      <div className="work-info">
        <span className="tag">Concept demo · {concept.category}</span>
        <h3>{concept.name}</h3>
        <p>{concept.description}</p>
        <span className="more">Start a similar project <ExternalLink size={14}/></span>
      </div>
    </button>
  )
}

export default function Work({ onPick }) {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <h2>Our work</h2>
        <p className="sub">Explore five website concepts created to show what we can build. These are sample projects, not real client work.</p>
        <div className="grid work-grid">
          {concepts.map(concept => <Card key={concept.name} concept={concept} onPick={onPick} />)}
        </div>
      </div>
    </section>
  )
}
