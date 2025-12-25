import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, Lock } from 'lucide-react';
import Button from '../components/common/Button';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Kiwi Crate - 6 Month Subscription',
      type: 'subscription',
      price: 21.56,
      originalPrice: 23.95,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200',
      details: 'Ages 5-8 | Monthly delivery'
    },
    {
      id: 2,
      name: 'Hydraulic Claw Kit',
      type: 'product',
      price: 24.95,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=200',
      details: 'Ages 8+'
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 35 ? 0 : 5.95;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={80} strokeWidth={1} />
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Button to="/shop" variant="primary" size="lg">
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/shop" className="back-link">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1>Shopping Cart ({cartItems.length})</h1>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-meta">{item.details}</p>
                  {item.type === 'subscription' && (
                    <span className="subscription-badge">Subscription</span>
                  )}
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>
                    <Plus size={16} />
                  </button>
                </div>
                <div className="item-price">
                  <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="original">${(item.originalPrice * item.quantity).toFixed(2)}</span>
                  )}
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <p className="free-shipping-note">
                  Add ${(35 - subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button variant="primary" size="lg" fullWidth>
                Proceed to Checkout
              </Button>
              <div className="security-note">
                <Lock size={14} />
                <span>Secure checkout</span>
              </div>
            </div>

            <div className="promo-code">
              <input type="text" placeholder="Enter promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
