import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const defaultFaqs = [
  {
    id: 1,
    question: 'How long does delivery to Nigeria take?',
    answer: 'Standard delivery takes 7–14 business days from the date of dispatch. We ship via reliable international couriers and provide a full tracking number as soon as the order leaves our India facility.'
  },
  {
    id: 2,
    question: 'Do I need to pay customs duties?',
    answer: 'We handle all customs documentation from our side. However, import duties in Nigeria may apply depending on the declared value. We will inform you of any applicable duties before your order ships so there are no surprises.'
  },
  {
    id: 3,
    question: 'What warranty do the laptops come with?',
    answer: 'All laptops — new and refurbished — come with a 1-year hardware warranty. If any hardware issue arises within that period, we coordinate a repair or replacement. Our WhatsApp support team is also available for remote troubleshooting.'
  },
  {
    id: 4,
    question: 'Are refurbished laptops reliable?',
    answer: 'Yes. Our refurbished units are sourced from certified resellers, professionally cleaned and tested, and graded before listing. Each unit passes a quality check covering battery health, keyboard, ports, and display. We would not list anything we would not use ourselves.'
  },
  {
    id: 5,
    question: 'What payment methods do you accept?',
    answer: 'We accept international debit/credit cards, PayPal, and bank transfers. We are also working on integrating Naira payment options for Nigerian customers — stay tuned.'
  },
  {
    id: 6,
    question: 'Can I return a laptop if there is a problem?',
    answer: 'If your laptop arrives damaged or faulty, contact us within 7 days of delivery and we will arrange a replacement or full refund. We do not accept returns for buyer\'s remorse, but our product descriptions are detailed enough to make the right choice.'
  }
];

const FAQ = ({ faqs = defaultFaqs, title = "Frequently Asked Questions" }) => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">{title}</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
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
