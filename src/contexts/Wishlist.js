import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Wishlist.css'; // Ensure you have the styles defined

export const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="wishlist-container">
      <header className="header1">
        <h1>SPECS</h1>
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </header>

      <div className="subheader">
        <h2>My Wishlist ❤️</h2>
      </div>

      <main className="wishlist-page">
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div className="product-card1" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <button
                className="add-to-cart"
                onClick={() => {
                  addToCart(product);
                  removeFromWishlist(product.id);
                  navigate('/cart');
                }}
              >
                Add to Cart
              </button>
              <button
                className="remove-from-wishlist"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
