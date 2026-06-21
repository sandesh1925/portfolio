import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      let currentSection = sections[0];
      
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    setActiveSection(sectionId);
    
    // Smooth scroll to section
    document.querySelector(`#${sectionId}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleNavClick('home')}>
            <div className="logo-text">
              <span className="logo-name">Sandesh</span>
              <span className="logo-surname">Yadav</span>
            </div>
            <span className="logo-tagline">Java Backend & AI Developer</span>
          </a>
        </div>
        
        <div className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''} 
                onClick={() => handleNavClick('home')}
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''} 
                onClick={() => handleNavClick('about')}
              >
                <i className="fas fa-user"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''} 
                onClick={() => handleNavClick('projects')}
              >
                <i className="fas fa-code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''} 
                onClick={() => handleNavClick('skills')}
              >
                <i className="fas fa-cogs"></i>
                <span>Skills</span>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''} 
                onClick={() => handleNavClick('contact')}
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="navbar-actions">
          <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-download"></i>
            <span>Resume</span>
          </a>
        </div>
      </div>
      
      {/* Progress bar indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress" style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}></div>
      </div>
    </header>
  );
};

export default Navbar; 