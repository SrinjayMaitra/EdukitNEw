import Hero from '../components/home/Hero';
import CratesPreview from '../components/home/CratesPreview';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedProducts from '../components/home/FeaturedProducts';
import GiftBanner from '../components/home/GiftBanner';
import Testimonials from '../components/common/Testimonials';
import FAQ from '../components/common/FAQ';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <CratesPreview />
      <HowItWorks />
      <FeaturedProducts />
      <GiftBanner />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
