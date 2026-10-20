import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Minus, Plus, Trash2, Leaf, ArrowRight } from 'lucide-react';
import { clearCart, removeItem, updateQuantity, selectCartTotal } from './CartSlice.jsx';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!items.length) return <main className="cart-page page-shell empty-cart"><div className="empty-illustration"><Leaf size={38} strokeWidth={1.1} /></div><span className="eyebrow">Your cart is taking a breather</span><h1>Nothing growing<br /><em>here just yet.</em></h1><p>There are plenty of lovely plants waiting to come home with you.</p><Link to="/plants" className="primary-button">Browse the plants <ArrowRight size={17} /></Link></main>;

  return <main className="cart-page page-shell">
    <div className="cart-page-top"><div><span className="eyebrow">A few good things</span><h1>Your cart<span className="cart-heading-count">({itemCount})</span></h1></div><Link to="/plants" className="back-link"><ArrowLeft size={16} /> Keep browsing</Link></div>
    <div className="cart-layout">
      <section className="cart-items" aria-label="Shopping cart items">
        <div className="cart-list-heading"><span>Item</span><span>Quantity</span><span>Total</span></div>
        {items.map((item) => <article className="cart-line" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-product"><h2>{item.name}</h2><p>{money(item.price)} each</p><button className="remove-link" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={14} /> Remove</button></div>
          <div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}><Plus size={14} /></button></div>
          <strong className="line-total">{money(item.price * item.quantity)}</strong>
        </article>)}
        <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button>
      </section>
      <aside className="order-summary"><span className="eyebrow">The little details</span><h2>Order summary</h2><div className="summary-row"><span>Plants ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span><span>{money(total)}</span></div><div className="summary-row"><span>Delivery</span><span className="free-label">On us</span></div><div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div><button className="checkout-button" onClick={() => window.alert('Coming soon — checkout is being watered.')}>Checkout <ArrowRight size={17} /></button><p className="secure-note"><Leaf size={14} /> Thoughtfully packed, always.</p><Link to="/plants" className="summary-continue">Continue shopping</Link></aside>
    </div>
  </main>;
}

