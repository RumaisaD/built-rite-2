import workbench from './workbench.jpg';
import beforeAfter from './before-after.jpg';

/** EDIT THIS FILE to replace dummy contact details, copy, services, reviews and photos. */
export const site = {
  name: 'Built Rite Handyman Services LLC',
  shortName: 'Built Rite',
  area: 'Tallahassee, Florida',
  // DUMMY contact details: replace before launch.
  phone: '(850) 555-5555',
  email: 'hello@builtrite-example.com',
  address: '123 Example Ave, Tallahassee, FL 32301',
  hours: 'Mon–Sat, 8am–6pm',
  aboutImage: workbench,
  beforeAfterImage: beforeAfter,
  // The hero photo is set in src/styles.css (.hero) → ./hero.jpg
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export const services = [
  { key: 'fl', title: 'Flooring & Tile Services', quote: 'Beautiful floors. Flawless finishes. Built to last.', tags: ['Vinyl plank & laminate', 'Tile repair', 'Backsplash'] },
  { key: 'dr', title: 'Doors, Windows & Cabinets', quote: 'Perfect fits. Smooth finishes. Every detail matters.', tags: ['Door hanging', 'Window repair', 'Cabinet install'] },
  { key: 'pt', title: 'Painting, Drywall & Exterior', quote: 'Refresh your space. Restore your home. Love the results.', tags: ['Interior paint', 'Drywall repair', 'Exterior touch-ups'] },
  { key: 'pl', title: 'Plumbing, Appliances & Handyman', quote: 'From everyday fixes to essential installations, we get the job done right.', tags: ['Faucets & leaks', 'Appliance installs', 'Mounting & assembly'] },
] as const;

/** SAMPLE reviews for layout only. Replace with verified customer reviews before launch. */
export const reviews = [
  { initials: 'MG', name: 'Maria G.', place: 'Tallahassee', text: 'Replaced our kitchen tile in a day and the grout lines are perfect. On time and cleaned up after.' },
  { initials: 'DR', name: 'David R.', place: 'Midtown', text: 'Fixed a leaking faucet and rehung three doors that had stuck for years. Fair price, no upsell.' },
  { initials: 'PS', name: 'Priya S.', place: 'Killearn', text: 'Installed our dishwasher and new cabinet pulls. They even called the next day to check on it.' },
  { initials: 'TB', name: 'Tom B.', place: 'Southwood', text: 'Quick quote, quick work. Patched drywall so well I can’t find where the hole was.' },
  { initials: 'LK', name: 'Lena K.', place: 'Frenchtown', text: 'Honest advice on what was worth fixing and what wasn’t. Our go-to for the house now.' },
];

export const faqs = [
  { q: 'What areas do you serve?', a: 'Tallahassee and nearby Leon County neighborhoods. Ask if you’re unsure whether we cover your address.' },
  { q: 'Can I get a quote first?', a: 'Yes. Describe the job in the form and we’ll reply with a clear price before any work starts.' },
  { q: 'Can I request a specific day?', a: 'Mention it in your message. We confirm availability when we reply.' },
  { q: 'Is my request a confirmed booking?', a: 'No. We follow up to confirm details, price and timing first.' },
];

export const steps = [
  { title: 'Tell us what you need', copy: 'Choose a service and describe the job.' },
  { title: 'Get your quote', copy: 'We review the details and reply with a clear price.' },
  { title: 'We get it done', copy: 'We schedule a visit and finish the work properly.' },
];
