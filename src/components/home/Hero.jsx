import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate('/shop');
  };

  return (
    <section className="hero" onClick={handleVideoClick}>
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hp-hero-d-holiday.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
