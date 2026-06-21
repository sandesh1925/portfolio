import { useState, useEffect } from 'react';
import { skills } from '../data/skills';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animate, setAnimate] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frameworks', name: 'Frameworks' },
    { id: 'databases', name: 'Databases' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'tools', name: 'Tools' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'concepts', name: 'Concepts' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(document.querySelector('#skills'));
    
    return () => observer.disconnect();
  }, []);

  const filteredSkills = activeCategory === 'all' 
    ? [
        ...skills.languages,
        ...skills.frameworks,
        ...skills.databases,
        ...skills.ai,
        ...skills.tools,
        ...skills.integrations,
        ...skills.concepts
      ]
    : skills[activeCategory];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'languages': return 'fas fa-code';
      case 'frameworks': return 'fas fa-layer-group';
      case 'databases': return 'fas fa-database';
      case 'ai': return 'fas fa-brain';
      case 'tools': return 'fas fa-tools';
      case 'integrations': return 'fas fa-plug';
      case 'concepts': return 'fas fa-lightbulb';
      default: return 'fas fa-star';
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className={`section-title ${animate ? 'animate' : ''}`}>
          <span className="title-accent">Technical</span> Skills
        </h2>
        
        <p className={`skills-subtitle ${animate ? 'animate' : ''}`}>
          My expertise spans Java Backend Development, AI Systems, and Full-stack Engineering. I specialize in building scalable microservices and integrating advanced AI capabilities.
        </p>
        
        <div className={`skills-categories ${animate ? 'animate' : ''}`}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.id !== 'all' ? getCategoryIcon(category.id) : 'fas fa-th'}></i>
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="skills-container">
          <div className={`skills-grid ${activeCategory}`}>
            {filteredSkills.map((skill, index) => (
              <div 
                className={`skill-item ${animate ? 'animate' : ''}`} 
                key={index}
                style={{ animationDelay: `${0.05 * (index % 12)}s` }}
              >
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-content">
                  <h4>{skill.name}</h4>
                  <div className="skill-level">
                    <div className="skill-progress">
                      <div className="skill-progress-bar" style={{ 
                        width: `${
                          skill.name === 'Java' || skill.name === 'Spring Boot' || skill.name === 'Microservices' ? '95%' : 
                          skill.name === 'PostgreSQL' || skill.name === 'AI Agent' || skill.name === 'Spring' ? '90%' :
                          skill.name === 'React' || skill.name === 'Node.js' || skill.name === 'NLP' || skill.name === 'RAG' ? '85%' :
                          skill.name === 'Docker' || skill.name === 'Git' || skill.name === 'MySQL' ? '85%' : '80%'
                        }`
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`skills-cta ${animate ? 'animate' : ''}`}>
          <a href="#projects" className="btn btn-primary">View My Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Skills; 