import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className={`hero-content ${animated ? 'animated' : ''}`}>
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Sandesh Yadav</span>
            <span className="position">Java Backend & AI Systems Developer</span>
          </h1>
          <p className="hero-description">
            Building scalable microservices and intelligent AI automation systems. Specializing in Java, Spring Boot, Generative AI, and cloud technologies. Driving AI Innovation with 2+ years of professional experience.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
          <div className="hero-tech-icons">
            <i className="fab fa-java" title="Java"></i>
            <i className="fab fa-react" title="React"></i>
            <i className="fas fa-robot" title="AI Agent"></i>
            <i className="fas fa-brain" title="Artificial Intelligence"></i>
            <i className="fas fa-database" title="Databases"></i>
            <i className="fab fa-aws" title="AWS"></i>
            <i className="fab fa-docker" title="Docker"></i>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <a href="#about" aria-label="Scroll to About section">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero; 