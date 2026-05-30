import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Chukwuemeka O.',
    location: 'Lagos, Nigeria',
    rating: 5,
    text: "I ordered the HP 14s and it arrived in 10 days. Everything was set up out of the box, battery life is incredible. Now I use it daily for my remote support job. Couldn't have started without Edukit.",
    product: 'HP 14s-dq',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: 2,
    name: 'Adaeze M.',
    location: 'Abuja, Nigeria',
    rating: 5,
    text: "The Lenovo IdeaPad I got is perfect for my online courses and freelance writing. It's light, the keyboard is great, and Edukit handled all the customs stress. Will recommend to everyone in my cohort.",
    product: 'Lenovo IdeaPad 1',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 3,
    name: 'Tunde A.',
    location: 'Port Harcourt, Nigeria',
    rating: 5,
    text: "Bought the refurbished ThinkPad. It feels brand new — no scratches, battery holds all day. For the price, there's nothing better. Their WhatsApp support even helped me set up my VPN for remote work.",
    product: 'ThinkPad E14 (Refurb)',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
  },
  {
    id: 4,
    name: 'Ngozi F.',
    location: 'Enugu, Nigeria',
    rating: 5,
    text: "I was skeptical about ordering a laptop internationally, but the process was seamless. Full tracking, customs handled, and it arrived in 12 days. The Dell Inspiron 14 is exactly what I needed for data entry work.",
    product: 'Dell Inspiron 14',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>From Our Customers in Nigeria</h2>
          <p>Real orders. Real people. Real careers launched.</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonials-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0
                }}
              >
                <Quote className="quote-icon" size={40} />
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FACC15" stroke="#FACC15" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-location">{testimonial.location}</span>
                    <span className="author-crate">{testimonial.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
