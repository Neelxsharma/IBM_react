import { Link, Route, Routes } from 'react-router-dom';
import { ArrowRight, ArrowDown, Leaf, Heart, PackageCheck } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import AboutUs from './components/AboutUs.jsx';

function LandingPage() {
  return <main className="landing-page">
    <section className="hero">
      <div className="hero-image" role="img" aria-label="Sunlit room filled with lush green houseplants" />
      <div className="hero-overlay" />
      <div className="hero-copy"><span className="hero-kicker"><span /> A nursery for everyday living</span><h1>Make room<br />for <em>green.</em></h1><p>Thoughtfully chosen houseplants, and a little help finding the ones that feel like you.</p><Link to="/plants" className="hero-cta">Get started <ArrowRight size={17} /></Link><span className="hero-caption">Plants for the everyday, since 2019</span></div>
      <div className="hero-side-note">GROW A LITTLE SLOWER · LIVE A LITTLE GREENER</div>
      <a href="#about" className="scroll-cue"><ArrowDown size={16} /> A little about us</a>
    </section>
    <section className="promise-strip"><div><Leaf size={18} /><span>Chosen with care</span></div><div><Heart size={18} /><span>Happy in real homes</span></div><div><PackageCheck size={18} /><span>Packed by hand</span></div></section>
    <AboutUs />
    <section className="home-feature"><div><span className="eyebrow">Your next favourite thing</span><h2>There’s a plant<br />for <em>your place.</em></h2></div><Link to="/plants" className="text-link">Take a look around <span>↗</span></Link></section>
    <footer className="site-footer"><Link to="/" className="brand"><span className="brand-mark"><Leaf size={18} /></span><span>paradise<span className="brand-light"> nursery</span></span></Link><span>Thoughtfully green, since 2019.</span><span>© Paradise Nursery</span></footer>
  </main>;
}

export default function App() {
  return <Routes><Route path="/" element={<LandingPage />} /><Route path="/plants" element={<><Navbar /><ProductList /><Footer /></>} /><Route path="/cart" element={<><Navbar /><CartItem /><Footer /></>} /><Route path="*" element={<LandingPage />} /></Routes>;
}

function Footer() { return <footer className="site-footer page-footer"><Link to="/" className="brand"><span className="brand-mark"><Leaf size={18} /></span><span>paradise<span className="brand-light"> nursery</span></span></Link><span>Thoughtfully green, since 2019.</span><span>© Paradise Nursery</span></footer>; }
