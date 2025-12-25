import { Link } from 'react-router-dom';
import { Heart, Lightbulb, Users, Award, Target, Sparkles } from 'lucide-react';
import Button from '../components/common/Button';
import Testimonials from '../components/common/Testimonials';
import './AboutPage.css';

const stats = [
  { number: '50M+', label: 'Crates Delivered' },
  { number: '40+', label: 'Countries Served' },
  { number: '200+', label: 'Team Members' },
  { number: '10+', label: 'Years of Innovation' }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Inspire Curiosity',
    description: 'We believe every child has the potential to be an innovator. Our projects spark curiosity and encourage exploration.'
  },
  {
    icon: Heart,
    title: 'Quality First',
    description: 'From materials to instructions, we obsess over every detail to ensure the best possible experience for families.'
  },
  {
    icon: Users,
    title: 'Inclusive Learning',
    description: 'STEAM education should be accessible to everyone. We design for diverse learning styles and abilities.'
  },
  {
    icon: Target,
    title: 'Real-World Skills',
    description: 'Beyond fun projects, we teach critical thinking, problem-solving, and creativity that last a lifetime.'
  }
];

const team = [
  {
    name: 'Sandra Oh Lin',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
    bio: 'Former engineer turned educator, passionate about making STEAM accessible to all children.'
  },
  {
    name: 'Marcus Chen',
    role: 'Chief Product Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    bio: 'Award-winning product designer with a background in child development and education.'
  },
  {
    name: 'Priya Patel',
    role: 'Head of Curriculum',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
    bio: 'PhD in Education with expertise in play-based learning and STEAM curriculum design.'
  },
  {
    name: 'James Wilson',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
    bio: 'Former NASA engineer bringing real-world engineering principles to children\'s projects.'
  }
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Inspiring the Next Generation of Innovators</h1>
            <p>
              At Edukit, we believe every child has the potential to change the world.
              Our mission is to inspire kids to see themselves as makers and innovators
              through hands-on projects that make learning feel like play.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Edukit was born from a simple observation: children learn best when
                they're having fun. Our founder, a former engineer and mother of three,
                noticed that the most memorable learning moments happened when her kids
                were building, creating, and exploring with their hands.
              </p>
              <p>
                What started in a garage in 2011 has grown into a global movement,
                delivering over 50 million crates to families in 40+ countries.
                But our mission remains the same: to inspire creativity and confidence
                through hands-on learning experiences.
              </p>
              <p>
                Every crate we design is tested by real kids and developed by experts
                in child development, STEAM education, and design. We're not just
                selling projects—we're building future innovators.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600"
                alt="Kids enjoying Edukit projects"
              />
              <div className="story-badge">
                <Sparkles size={24} />
                <span>Est. 2011</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <h2>Our Values</h2>
          <p className="values-intro">
            These principles guide everything we do, from product development to customer service.
          </p>
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

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            The passionate people behind the crates
          </p>
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

      {/* Awards Section */}
      <section className="about-awards">
        <div className="container">
          <h2>Recognition & Awards</h2>
          <div className="awards-grid">
            <div className="award-item">
              <Award size={40} />
              <h4>Parents' Choice Award</h4>
              <p>2023 Gold Medal Winner</p>
            </div>
            <div className="award-item">
              <Award size={40} />
              <h4>STEM.org Certified</h4>
              <p>Educational Product</p>
            </div>
            <div className="award-item">
              <Award size={40} />
              <h4>Good Housekeeping</h4>
              <p>Best Toy Award 2023</p>
            </div>
            <div className="award-item">
              <Award size={40} />
              <h4>Inc. 5000</h4>
              <p>Fastest Growing Companies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start the Adventure?</h2>
            <p>
              Join millions of families discovering the joy of hands-on learning.
            </p>
            <div className="cta-buttons">
              <Button to="/crates" variant="primary" size="lg">
                Explore Crates
              </Button>
              <Button to="/how-it-works" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
