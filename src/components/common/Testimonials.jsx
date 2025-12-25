import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'California',
    rating: 5,
    text: "My kids absolutely love getting their KiwiCo crates each month! The projects are engaging, educational, and most importantly - fun! It's become our favorite family activity.",
    crate: 'Kiwi Crate',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
  },
  {
    id: 2,
    name: 'Michael T.',
    location: 'Texas',
    rating: 5,
    text: "Tinker Crate has sparked my son's interest in engineering. He's learned so much about how things work and now wants to be an engineer when he grows up!",
    crate: 'Tinker Crate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    location: 'New York',
    rating: 5,
    text: "As a busy mom, I love that everything comes ready to go. The instructions are clear, and my daughter feels so proud when she completes her projects.",
    crate: 'Koala Crate',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
  },
  {
    id: 4,
    name: 'David K.',
    location: 'Florida',
    rating: 5,
    text: "Best gift I've ever given my nieces! They're always excited to see what's in their new crate. The quality of materials is impressive.",
    crate: 'Atlas Crate',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>What Parents Are Saying</h2>
          <p>Join thousands of happy families discovering the joy of hands-on learning</p>
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
                    <span className="author-crate">{testimonial.crate} subscriber</span>
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
