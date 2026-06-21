import { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    
    observer.observe(document.querySelector('#about'));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>About Me</h2>
        
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'animate' : ''}`}>
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sandesh Yadav - Java Engineer and AI Developer" />
            </div>
            <div className="tech-icons">
              <div className="tech-icon java">
                <i className="fab fa-java"></i>
              </div>
              <div className="tech-icon ai">
                <i className="fas fa-brain"></i>
              </div>
              <div className="tech-icon cloud">
                <i className="fas fa-cloud"></i>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <p className={`intro ${isVisible ? 'animate' : ''}`}>
              I'm a passionate <span className="highlight">Java Backend & AI Systems Developer</span> with <span className="highlight">2+ years</span> of professional experience 
              building scalable applications and intelligent automation systems at <span className="highlight">56N Software</span>. I specialize in engineering high-performance 
              <span className="highlight"> microservices</span> and integrating advanced <span className="highlight">Generative AI</span> workflows, independently managing full 
              project lifecycles from requirement gathering to cloud deployment.
            </p>
            
            <p className={`${isVisible ? 'animate delay-1' : ''}`}>
              My expertise bridges robust backend engineering with modern AI research, successfully delivering production-ready applications across the 
              <span className="highlight"> FinTech</span> and <span className="highlight">HR Tech</span> domains. I have extensive experience in building 
              <span className="highlight"> AI Chatbots</span>, <span className="highlight">Multi-agent orchestration</span>, <span className="highlight">RAG systems</span>, 
              and integrating <span className="highlight">Vector Databases</span> like Pinecone.
            </p>
            
            <div className={`expertise-section ${isVisible ? 'animate delay-2' : ''}`}>
              <h3>Core Technical Expertise:</h3>
              <ul>
                <li><strong>Backend Frameworks:</strong> Java, Spring Boot, Microservices, Node.js, PostgreSQL (Flyway)</li>
                <li><strong>Frontend & Workflows:</strong> Building full-stack interfaces with React and managing reliable Git workflows</li>
                <li><strong>Agentic AI & RAG:</strong> Multi-agent orchestration, NLP, AI Chatbots, and Pinecone Vector Databases</li>
                <li><strong>Integrations:</strong> Third-party APIs, Microsoft Graph API, and Google Calendar integrations</li>
              </ul>
            </div>
            
            <p className={`${isVisible ? 'animate delay-3' : ''}`}>
              I am a self-driven problem solver passionate about distributed system design, advanced AI capabilities, and building software that drives real business impact. 
              Feel free to connect with me to discuss backend engineering, Agentic AI, or potential collaborations.
            </p>
            
            <div className={`about-highlights ${isVisible ? 'animate delay-4' : ''}`}>
              <div className="highlight-card">
                <h3>2+</h3>
                <p>Years Experience</p>
                <div className="highlight-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
              </div>
              <div className="highlight-card">
                <h3>10+</h3>
                <p>Projects Completed</p>
                <div className="highlight-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
              </div>
              <div className="highlight-card">
                <h3>AI+Backend</h3>
                <p>Expertise</p>
                <div className="highlight-icon">
                  <i className="fas fa-brain"></i>
                </div>
              </div>
            </div>
            
            <div className={`about-cta ${isVisible ? 'animate delay-5' : ''}`}>
              <a href="/resume.pdf" className="btn btn-resume" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-download"></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 