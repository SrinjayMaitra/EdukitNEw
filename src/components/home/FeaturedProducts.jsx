import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import Button from '../common/Button';
import { getFeaturedProducts } from '../../data/products';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Cart functionality would be implemented here
  };

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <h2>Shop Individual Projects</h2>
            <p>Not ready for a subscription? Try our individual project kits!</p>
          </div>
          <Link to="/shop" className="view-all-link">
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="products-cta">
          <Button to="/shop" variant="primary" size="lg">
            Shop All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
