import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, Lock } from 'lucide-react';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const FREE_SHIPPING_THRESHOLD = 300;
const SHIPPING_FEE = 25;

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem, subtotal } = useCart();

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty">
        <div className="container">
          <div className="empty-cart">
            <ShoppingBag size={80} strokeWidth={1} />
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added any laptops to your cart yet.</p>
            <Button to="/shop" variant="primary" size="lg">
              Browse Laptops
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
                  {item.category && (
                    <p className="item-meta">{item.category.replace('-', ' ')}</p>
                  )}
                  <span className="item-unit-price">${item.price.toFixed(2)} each</span>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
                    <Plus size={16} />
                  </button>
                </div>
                <div className="item-price">
                  <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                  {item.originalPrice && (
                    <span className="original">${(item.originalPrice * item.quantity).toFixed(2)}</span>
                  )}
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)} aria-label="Remove item">
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
                <span>Shipping to Nigeria</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <p className="free-shipping-note">
                  Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping!
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
                <span>Secure checkout · Customs & duties handled by Edukit</span>
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
