import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data.jsx';

export function Testimonials() {
return ( <section className="section alt" id="feedback"> <div className="wrap"> <h2>Good work. Honest relationships.</h2> </div> </section>
);
}

export default function Faq() {
const [open, setOpen] = useState(0);

return ( <section className="section" id="faq"> <div className="wrap narrow"> <h2>Questions, answered</h2>

```
    {faqs.map(([q, a], i) => (
      <div
        key={q}
        className={`faq ${open === i ? 'open' : ''}`}
      >
        <h3>
          <button
            aria-expanded={open === i}
            aria-controls={`f${i}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            {q}
            <ChevronDown size={20} />
          </button>
        </h3>

        <div
          id={`f${i}`}
          role="region"
          className="faq-a"
          hidden={open !== i}
        >
          <p>{a}</p>
        </div>
      </div>
    ))}
  </div>
</section>

);
}
