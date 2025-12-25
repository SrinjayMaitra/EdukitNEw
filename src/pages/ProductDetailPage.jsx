import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Check, Truck, RotateCcw } from 'lucide-react';
import Button from '../components/common/Button';
import ProductCard from '../components/common/ProductCard';
import { getProductById, products } from '../data/products';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>Sorry, we couldn't find the product you're looking for.</p>
          <Button to="/shop" variant="primary">Back to Shop</Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </nav>

      {/* Product Main */}
      <section className="product-main">
        <div className="container">
          <div className="product-grid">
            {/* Images */}
            <div className="product-images">
              <div className="main-image">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="image-thumbnails">
                {[product.image, product.image, product.image].map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>

              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(product.rating) ? '#FACC15' : 'none'}
                      stroke="#FACC15"
                    />
                  ))}
                </div>
                <span>{product.rating} ({product.reviewCount} reviews)</span>
              </div>

              <div className="product-pricing">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                    <span className="discount-badge">Save {discount}%</span>
                  </>
                )}
              </div>

              <p className="product-description">{product.description}</p>

              <div className="product-meta-info">
                <div className="meta-item">
                  <span className="meta-label">Age Range:</span>
                  <span className="meta-value">{product.ageRange}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Availability:</span>
                  <span className="meta-value in-stock">
                    <Check size={16} /> In Stock
                  </span>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="product-actions">
                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                    <Minus size={18} />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)}>
                    <Plus size={18} />
                  </button>
                </div>
                <Button variant="primary" size="lg" onClick={handleAddToCart}>
                  <ShoppingCart size={20} />
                  Add to Cart
                </Button>
              </div>

              <div className="secondary-actions">
                <button className="action-btn">
                  <Heart size={20} />
                  Add to Wishlist
                </button>
                <button className="action-btn">
                  <Share2 size={20} />
                  Share
                </button>
              </div>

              {/* Shipping Info */}
              <div className="shipping-info">
                <div className="shipping-item">
                  <Truck size={20} />
                  <div>
                    <span className="shipping-title">Free Shipping</span>
                    <span className="shipping-detail">On orders over $35</span>
                  </div>
                </div>
                <div className="shipping-item">
                  <RotateCcw size={20} />
                  <div>
                    <span className="shipping-title">Easy Returns</span>
                    <span className="shipping-detail">30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="product-details">
        <div className="container">
          <div className="details-tabs">
            <button className="tab active">Description</button>
            <button className="tab">What's Included</button>
            <button className="tab">Reviews ({product.reviewCount})</button>
          </div>
          <div className="details-content">
            <h3>About this Project</h3>
            <p>{product.description}</p>
            <p>
              This hands-on project kit includes everything you need to complete
              the activity. Perfect for kids ages {product.ageRange}, it combines
              fun with learning to create an engaging experience.
            </p>
            <h4>Learning Outcomes:</h4>
            <ul>
              <li>Develops problem-solving skills</li>
              <li>Encourages creative thinking</li>
              <li>Builds fine motor skills</li>
              <li>Introduces STEAM concepts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="container">
            <h2>You May Also Like</h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
