import { Leaf, Sun, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-copy">
        <span className="eyebrow">A little more green, every day</span>
        <h2>Good things grow<br /><em>at home.</em></h2>
        <p>We’re a small team of plant people who believe a greener room can change the way a day feels. Every plant we send is chosen with care, packed by hand, and paired with advice that makes looking after it feel simple.</p>
        <a href="/plants" className="text-link">Meet your new plant <span>↗</span></a>
      </div>
      <div className="about-points">
        <div><span className="about-icon"><Sprout size={21} /></span><div><strong>Picked with care</strong><p>Healthy plants from growers we know.</p></div></div>
        <div><span className="about-icon"><Sun size={21} /></span><div><strong>Advice that sticks</strong><p>Real guidance for real-life homes.</p></div></div>
        <div><span className="about-icon"><Leaf size={21} /></span><div><strong>Less fuss, more green</strong><p>Find a plant that fits your pace.</p></div></div>
      </div>
    </section>
  );
}
