import React, { useState } from 'react';
import Menu from '../../components/Menu';
import './MenuPage.css';

const MOCK_ITEMS = [
  { id: 1, name: 'Classic Steamed Chicken Momo', price: 100, image: 'steamed', tag: 'Bestseller' },
  { id: 2, name: 'Crispy Fried Veg Momo', price: 120, image: 'fried', tag: 'Crunchy' },
  { id: 3, name: 'Spicy Jhol Momo', price: 80, image: 'jhol', tag: 'Spicy' },
  { id: 4, name: 'Tandoori Paneer Momo', price: 99, image: 'tandoori', tag: 'Flavoursome' },
  { id: 5, name: 'Chilli Chicken Momo', price: 120, image: 'chilli', tag: 'Hot' },
  { id: 6, name: 'Chocolate Momo Dessert', price: 70, image: 'dessert', tag: 'Sweet' },
];

const MenuPage = () => {
  const [filter, setFilter] = useState('All');

  const onAddToOrder = (item) => {
    alert(`Added ₹${item.name} to your order!`);
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Discover True Taste</h1>
        <p>Explore our handcrafted selection of authentic momos.</p>
      </div>

      <div className="menu-filters">
        {['All', 'Steamed', 'Fried', 'Spicy', 'Veg'].map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-content">
        <Menu items={MOCK_ITEMS} onAdd={onAddToOrder} filter={filter} />
      </div>
    </div>
  );
};

export default MenuPage;