import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const defaultFaqs = [
  {
    id: 1,
    question: 'How does the subscription work?',
    answer: 'Our subscription is simple and flexible! Choose a crate, pick a plan (monthly, 3-month, 6-month, or 12-month), and we\'ll deliver a new crate of hands-on projects to your door each month. You can pause, skip, or cancel anytime.'
  },
  {
    id: 2,
    question: 'What age groups do you serve?',
    answer: 'We have crates designed for all ages, from 0-104! Panda Crate is perfect for babies (0-2), Koala Crate for toddlers (2-4), Kiwi and Atlas Crates for elementary ages (5-8 and 6-11), and Tinker, Doodle, Maker, and Eureka Crates for tweens, teens, and adults.'
  },
  {
    id: 3,
    question: 'Can I gift a subscription?',
    answer: 'Absolutely! Gift subscriptions make the perfect present for any occasion. Choose the number of months you\'d like to gift, and we\'ll send a beautiful gift notification to the recipient. They\'ll receive their first crate within 1-2 weeks.'
  },
  {
    id: 4,
    question: 'What if my child doesn\'t like a crate?',
    answer: 'We want every family to love their Edukit experience! If a crate isn\'t quite right, contact our customer service team within 30 days of delivery. We\'ll work with you to make it right, whether that\'s a replacement crate or a refund.'
  },
  {
    id: 5,
    question: 'Do I need to provide any materials?',
    answer: 'Nope! Each crate comes with everything needed to complete the projects, including detailed instructions. You might occasionally want scissors or tape for extra projects, but the core activities are ready to go right out of the box.'
  },
  {
    id: 6,
    question: 'When will my crate arrive?',
    answer: 'New subscriptions typically ship within 1-3 business days. Monthly crates ship around the same time each month. Shipping usually takes 3-7 business days depending on your location. You\'ll receive tracking information via email when your crate ships.'
  }
];

const FAQ = ({ faqs = defaultFaqs, title = "Frequently Asked Questions" }) => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${openId === faq.id ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <ChevronDown className="faq-icon" size={20} />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
