import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Sprout } from 'lucide-react';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice.jsx';

export default function Navbar() {
  const count = useSelector(selectCartCount);
  return (
    <header className="site-nav">
      <Link to="/" className="brand"><span className="brand-mark"><Sprout size={20} /></span><span>paradise<span className="brand-light"> nursery</span></span></Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav" to="/cart"><ShoppingBag size={18} strokeWidth={1.8} /><span>Cart</span><span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}
