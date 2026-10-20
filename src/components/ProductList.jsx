import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Plus, ArrowUpRight } from 'lucide-react';
import { categories, plants } from '../data/plants.js';
import { addItem } from './CartSlice.jsx';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState('all');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const visiblePlants = activeCategory === 'all' ? plants : plants.filter((plant) => plant.category === activeCategory);

  return (
    <main className="catalog-page page-shell">
      <section className="catalog-intro">
        <div><span className="eyebrow">The plant shop · Est. with care</span><h1>Find your<br /><em>kind of green.</em></h1></div>
        <p>From your first little windowsill plant to a leafy corner that takes over—in the best way. Find the right one for your space.</p>
      </section>
      <div className="catalog-toolbar">
        <div className="category-tabs" role="tablist" aria-label="Plant categories">
          <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>All plants <span>18</span></button>
          {categories.map((category) => <button key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => setActiveCategory(category.id)}>{category.name}</button>)}
        </div>
        <span className="result-count">{visiblePlants.length} plants</span>
      </div>
      {activeCategory === 'all' ? categories.map((category) => (
        <section className="plant-section" key={category.id}>
          <div className="section-heading"><div><span className="eyebrow">{category.note}</span><h2>{category.name}</h2></div><button className="section-link" onClick={() => setActiveCategory(category.id)}>Shop this edit <ArrowUpRight size={16} /></button></div>
          <div className="plant-grid">{plants.filter((plant) => plant.category === category.id).map((plant, index) => <PlantCard key={plant.id} plant={plant} added={cartItems.some((item) => item.id === plant.id)} dispatch={dispatch} index={index} />)}</div>
        </section>
      )) : (
        <section className="plant-section filtered-section"><div className="section-heading"><div><span className="eyebrow">{categories.find((c) => c.id === activeCategory)?.note}</span><h2>{categories.find((c) => c.id === activeCategory)?.name}</h2></div></div><div className="plant-grid">{visiblePlants.map((plant, index) => <PlantCard key={plant.id} plant={plant} added={cartItems.some((item) => item.id === plant.id)} dispatch={dispatch} index={index} />)}</div></section>
      )}
      <div className="catalog-note"><span>✳</span> A little note: plants are living things, so each one has its own character.</div>
    </main>
  );
}

function PlantCard({ plant, added, dispatch, index }) {
  return <article className="plant-card" style={{ '--card-order': index }}>
    <div className="plant-photo-wrap"><img className="plant-photo" src={plant.image} alt={plant.name} loading="lazy" /><span className="photo-tag">{categories.find((category) => category.id === plant.category)?.name}</span></div>
    <div className="plant-card-content"><div className="plant-title-row"><h3>{plant.name}</h3><span className="plant-price">{money(plant.price)}</span></div><p>{plant.description}</p><button className={`add-button ${added ? 'added' : ''}`} disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? <><Check size={16} /> In your cart</> : <><Plus size={16} /> Add to cart</>}</button></div>
  </article>;
}

