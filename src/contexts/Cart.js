import React, { useContext, useState } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(StoreContext);

  const [powerLevels, setPowerLevels] = useState(cart.map(() => ({ left: 0, right: 0 })));

  const handlePowerChange = (index, eye, increment) => {
    setPowerLevels(prevLevels => {
      const newLevels = [...prevLevels];
      newLevels[index] = {
        ...newLevels[index],
        [eye]: Math.max(newLevels[index][eye] + increment, 0)
      };
      return newLevels;
    });
  };

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      <div className="cart-grid">
        {cart.map((product, index) => (
          <div className="product-card2" key={product.id}>
            <button
              className="remove-button"
              onClick={() => removeFromCart(product.id)}
            >
              &times;
            </button>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Shape: {product.shape}</p>
              <p>₹{product.price}</p>
              <div className="power-controls-container">
                <div className="power-control">
                  <button
                    className="decrement"
                    onClick={() => handlePowerChange(index, 'left', -1)}
                    disabled={powerLevels[index].left <= 0}
                  />
                  <span>Left Eye: {powerLevels[index].left}</span>
                  <button
                    className="increment"
                    onClick={() => handlePowerChange(index, 'left', 1)}
                  />
                </div>
                <div className="power-control">
                  <button
                    className="decrement"
                    onClick={() => handlePowerChange(index, 'right', -1)}
                    disabled={powerLevels[index].right <= 0}
                  />
                  <span>Right Eye: {powerLevels[index].right}</span>
                  <button
                    className="increment"
                    onClick={() => handlePowerChange(index, 'right', 1)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h3>Total Amount: ₹{totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
