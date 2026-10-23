import { FormEvent, useEffect, useRef, useState } from 'react';
import { faqs, nav, reviews, services, site, steps } from './site';

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header id="hd" className={open ? 'open' : ''}>
      <div className="shell bar">
        <a className="logo" href="#home">
          {site.shortName}<span style={{ color: '#c99a2e' }}>.</span>
          <small>Handyman Services LLC</small>
        </a>
        <nav id="nav" onClick={(e) => { if ((e.target as HTMLElement).tagName === 'A') setOpen(false); }}>
          {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
        <div className="right">
          <a className="btn" href="#contact">Get a Free Quote</a>
          <button id="menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>{open ? '✕' : '☰'}</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="shell">
        <div className="tag">{site.area} · Handyman services</div>
        <h1>Built Rite. <em>Every Time.</em></h1>
        <p>Reliable handyman services for repairs, installations, and home improvements. We take care of the details so you can enjoy a home that works for you.</p>
        <div className="cta">
          <a className="btn light" href="#contact">Request a quote</a>
          <a className="btn ghost" href="#services">Explore services</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sec" id="about">
      <div className="shell about">
        <div>
          <div className="tag">Welcome to Tallahassee</div>
          <h2>The Right Team for <em>Every Repair.</em></h2>
          <p className="lead">{site.name} takes care of repairs, installs and upgrades for homes across the Tallahassee area.</p>
          <p className="mute">You get a clear quote before we start, tidy work, and a clean space when we leave.</p>
        </div>
        <img className="aimg" src={site.aboutImage} alt="Organized handyman workbench with tools and a cordless drill" />
      </div>
    </section>
  );
}

function Services({ onPick }: { onPick: (title: string) => void }) {
  return (
    <section className="sec" id="services" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="shead">
          <div><div className="tag">What we help with</div><h2>Small fixes. <em>Big difference.</em></h2></div>
          <p className="mute">Pick a service to start your quote request.</p>
        </div>
        <div className="sgrid">
          {services.map((s) => (
            <button key={s.key} className={`svc ${s.key}`} onClick={() => { onPick(s.title); scrollToId('contact'); }}>
              <div>
                <h3>{s.title}</h3>
                <p>“{s.quote}”</p>
                <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="sec dark">
      <div className="shell">
        <div className="tag">How it works</div>
        <h2>Getting it fixed should feel <em>easy.</em></h2>
        <div className="steps">
          {steps.map((s, i) => <div key={s.title}><b>{i + 1}</b><h3>{s.title}</h3><p>{s.copy}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="sec" id="work">
      <div className="shell">
        <div className="shead">
          <div><div className="tag">Made with care</div><h2>Reliable Repairs. <em>Quality You Can See.</em></h2></div>
          <p className="mute">Same room: before on the left, after on the right.</p>
        </div>
        <figure className="ba">
          <img src={site.beforeAfterImage} alt="Room before and after: dusty floor and white walls on the left, polished wood floor and painted walls on the right" />
          <span className="l" style={{ left: 14 }}>Before</span>
          <span className="l" style={{ right: 14 }}>After</span>
        </figure>
      </div>
    </section>
  );
}

function Reviews() {
  const track = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = track.current; if (!el) return;
    const step = (el.querySelector('.rev') as HTMLElement).offsetWidth + 16;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    if (dir === 1) atEnd ? el.scrollTo({ left: 0, behavior: 'smooth' }) : el.scrollBy({ left: step, behavior: 'smooth' });
    else el.scrollLeft <= 4 ? el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' }) : el.scrollBy({ left: -step, behavior: 'smooth' });
  };
  return (
    <section className="sec" id="reviews" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="rhead">
          <div><div className="tag">Kind words</div><h2>The work speaks. <em>So do neighbors.</em></h2></div>
          <div className="arr">
            <button aria-label="Previous reviews" onClick={() => move(-1)}>←</button>
            <button aria-label="Next reviews" onClick={() => move(1)}>→</button>
          </div>
        </div>
        <div className="track" ref={track} tabIndex={0} aria-label="Customer reviews">
          {reviews.map((r) => (
            <figure className="rev" key={r.name}>
              <q>{r.text}</q>
              <div className="who"><span>{r.initials}</span><div>{r.name}<small>{r.place} · Sample review</small></div></div>
            </figure>
          ))}
        </div>
        <p className="note">Sample reviews for layout only. Replace with verified customer reviews before launch.</p>
      </div>
    </section>
  );
}

function Contact({ service, setService }: { service: string; setService: (s: string) => void }) {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setDone(true); }; // demo only: nothing is sent or stored
  return (
    <section className="sec dark" id="contact">
      <div className="shell cgrid">
        <div>
          <div className="tag">Let’s talk</div>
          <h2>Ready to make it <em>better?</em></h2>
          <p className="mute" style={{ marginTop: 20 }}>Tell us about the job. We reply within one business day.</p>
          <dl className="info">
            <div><dt>Phone</dt><dd>{site.phone}</dd></div>
            <div><dt>Email</dt><dd>{site.email}</dd></div>
            <div><dt>Address</dt><dd>{site.address}</dd></div>
            <div><dt>Hours</dt><dd>{site.hours}</dd></div>
          </dl>
        </div>
        <form onSubmit={submit}>
          <h3>Tell us about your space.</h3>
          <p className="demo">Demo form only. Nothing is sent or stored.</p>
          <label>Your name<input autoComplete="name" placeholder="Full name" /></label>
          <label>Phone<input type="tel" autoComplete="tel" placeholder={site.phone} /></label>
          <label>Email<input type="email" autoComplete="email" placeholder="you@example.com" /></label>
          <label>Service needed
            <select value={service} onChange={(e) => setService(e.target.value)}>
              <option value="">Select a service</option>
              {services.map((s) => <option key={s.key}>{s.title}</option>)}
              <option>Other / Not sure</option>
            </select>
          </label>
          <label className="full">Describe the job<textarea rows={4} placeholder="What needs attention?" /></label>
          <button className="btn full" type="submit" style={{ justifyContent: 'center' }}>Preview quote request</button>
          <p id="res" role="status">{done ? 'Demo confirmation. Nothing was sent or stored.' : ''}</p>
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="sec" id="faq">
      <div className="shell faq">
        <div><div className="tag">Good to know</div><h2>A few things you might <em>ask.</em></h2></div>
        <div>{faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="close dark">
      <div className="shell">
        <h2>Built Rite. <em>Every Time.</em></h2>
        <a className="btn light" href="#contact">Let’s talk about it</a>
      </div>
    </section>
  );
}

export default function App() {
  const [service, setService] = useState('');
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);
  return (
    <>
      <Header />
      <main>
        <Hero /><About />
        <Services onPick={setService} />
        <Steps /><Work /><Reviews />
        <Contact service={service} setService={setService} />
        <FAQ /><Closing />
      </main>
      <footer><div className="shell"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.area}</span></div></footer>
    </>
  );
}
