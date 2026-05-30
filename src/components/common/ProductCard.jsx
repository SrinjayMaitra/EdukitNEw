import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    badge,
    ageRange,
    category
  } = product;

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="product-card">
      <Link to={`/shop/product/${id}`} className="product-card-link">
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" loading="lazy" />
          {badge && <span className={`product-badge badge-${badge.toLowerCase()}`}>{badge}</span>}
          {discount > 0 && <span className="product-discount">-{discount}%</span>}
        </div>
        <div className="product-info">
          <div className="product-info-top">
            <span className="product-category">{category}</span>
            <div className="product-rating">
              <Star size={14} fill="#FACC15" stroke="#FACC15" />
              <span>{rating}</span>
              <span className="review-count">({reviewCount})</span>
            </div>
          </div>
          <h3 className="product-name">{name}</h3>
        </div>
      </Link>
      <div className="product-footer">
        <div className="product-pricing">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
        </div>
        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
            onAddToCart && onAddToCart(product);
          }}
          aria-label={`Add ${name} to cart`}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
