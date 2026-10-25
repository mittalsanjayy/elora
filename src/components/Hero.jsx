import { ArrowRight } from 'lucide-react';
import { brand, projects } from '../data.jsx';

const Mock = ({ p, cls, image }) => (
  <div
    className={`mock ${cls} mock-photo`}
    style={{ '--a': p[3], '--b': p[4] }}
    aria-hidden="true"
  >
    <div className="mock-bar">
      <i />
      <i />
      <i />
      <span>{p[1].toLowerCase().replace(/\W+/g, '')}.com</span>
    </div>
    <div className="mock-photo-body">
      <img src={image} alt="" />
    </div>
  </div>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="slogan">{brand.slogan}</p>
          <h1>
            Websites that make people <em>stop scrolling</em>.
          </h1>
          <p className="lead">
            ELORA is a web development studio building custom sites,
            online stores and web apps for businesses, startups and
            creators — designed to look sharp and work on every screen.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              Start Your Project <ArrowRight size={18} />
            </a>
            <a className="btn btn-ghost" href="#work">
              Explore Our Work
            </a>
          </div>
        </div>
        <div className="hero-vis">
          <div className="orb" />
          <Mock p={projects[4]} cls="m1" image="/images/gym.jpeg" />
          <Mock p={projects[0]} cls="m2" image="/images/pet.jpeg" />
          <Mock p={projects[3]} cls="m3" image="/images/dress.jpeg" />
        </div>
      </div>
    </section>
  );
}

