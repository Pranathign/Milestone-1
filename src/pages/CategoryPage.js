// src/pages/CategoryPage.js
import React, { useState } from 'react';
import { categories, cakes } from '../data';
import { useCart } from '../contexts/CartContext';
import CakeCard from '../components/CakeCard';

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addItemToCart } = useCart();

  // Handle category click
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Handle adding item to the cart
  const handleAddToCart = (cake, quantity = 1) => {
    addItemToCart({ ...cake, quantity });
  };

  // If no category is selected, show all cakes or filter based on selectedCategory
  const filteredCakes = selectedCategory
    ? cakes.filter((cake) => cake.categoryId === selectedCategory)
    : cakes; // Show all cakes when no category is selected

  return (
    <div>
      <h2>Categories of Food</h2>
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="cakes">
          <h3>{categories.find((c) => c.id === selectedCategory)?.name}</h3>
          {filteredCakes.length === 0 ? (
            <p>No cakes found in this category.</p>
          ) : (
            <div className="cake-list">
              {filteredCakes.map((cake) => (
                <CakeCard key={cake.id} cake={cake} onAddToCart={handleAddToCart} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Message when no category is selected */}
      {!selectedCategory && <p>Please select a category to see the cakes.</p>}
    </div>
  );
};

export default CategoryPage;
