import { Laptop, Globe, Users, Target } from 'lucide-react';
import Button from '../components/common/Button';
import Testimonials from '../components/common/Testimonials';
import './AboutPage.css';

const stats = [
  { number: '500+', label: 'Laptops Shipped' },
  { number: '2', label: 'Countries (India & Nigeria)' },
  { number: '7–14', label: 'Days Avg. Delivery' },
  { number: '1 yr', label: 'Warranty on Every Unit' }
];

const values = [
  {
    icon: Laptop,
    title: 'Access Over Everything',
    description: 'A laptop should not be a luxury. We source affordable, work-ready machines so anyone can compete in the global IT job market.'
  },
  {
    icon: Globe,
    title: 'Bridging the Digital Divide',
    description: 'Nigeria has talent. What it needs is access. We ship the tools that turn potential into opportunity.'
  },
  {
    icon: Users,
    title: 'Community-Driven',
    description: 'We are built on referrals and trust. Every customer we serve becomes an advocate for the next person who needs a laptop.'
  },
  {
    icon: Target,
    title: 'Practical by Design',
    description: 'No bloatware, no gimmicks. Every laptop we list is tested for real IT work — remote support, data entry, freelance, and online learning.'
  }
];

const team = [
  {
    name: 'Srinjay M.',
    role: 'Founder — India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    bio: 'Based in India. Saw the opportunity to connect affordable laptops with the fast-growing Nigerian IT workforce.'
  },
  {
    name: 'Jay A.',
    role: 'Nigeria Operations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    bio: 'Ground team in Nigeria. Manages logistics, customs, and community relationships with local IT professionals.'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>We Ship Laptops from India to Nigeria</h1>
            <p>
              Edukit exists because skilled Nigerians deserve access to affordable, reliable technology. We source quality laptops in India and deliver them to your door — handling every step in between.
            </p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Edukit started from a straightforward observation: Nigeria's IT talent pool is large and growing, but access to reliable, affordable hardware is a constant barrier. Laptops available locally are often overpriced, second-hand without warranty, or simply not suited for remote work.
              </p>
              <p>
                Operating from India, we have access to a competitive market for both new and certified refurbished laptops. Our model is simple — source the best units at fair prices, quality-test every one, and ship directly to Nigerian customers with full customs handling and a 1-year warranty.
              </p>
              <p>
                We are not a marketplace. We curate every laptop on this site personally. If it wouldn't work reliably for IT job applications, online courses, or remote support roles, it doesn't make the cut.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600"
                alt="Laptop ready for shipping"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>What We Stand For</h2>
          <p className="values-intro">These principles shape every decision we make.</p>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>The Team</h2>
          <p className="team-intro">Two people, two countries, one mission.</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to get the right laptop?</h2>
            <p>Browse our selection and we'll handle everything from sourcing to your door.</p>
            <div className="cta-buttons">
              <Button to="/shop" variant="primary" size="lg">Browse Laptops</Button>
              <Button to="/how-it-works" variant="outline" size="lg">How It Works</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
