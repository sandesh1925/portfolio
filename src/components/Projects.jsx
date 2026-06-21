import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  
  useEffect(() => {
    setFilteredProjects(projects);
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(document.querySelector('#projects'));
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    setIsFiltering(true);
    
    const filterTimer = setTimeout(() => {
      if (activeFilter === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter(project => 
            project.techStack.some(tech => 
              tech.toLowerCase().includes(activeFilter.toLowerCase())
            )
          )
        );
      }
      
      setTimeout(() => setIsFiltering(false), 100);
    }, 400);
    
    return () => clearTimeout(filterTimer);
  }, [activeFilter]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className={`section-title ${animate ? 'animate' : ''}`}>
          <span className="title-accent">My</span> Projects
        </h2>
        
        <p className={`projects-subtitle ${animate ? 'animate' : ''}`}>
          Explore some of my recent work and personal projects that showcase my technical skills and problem-solving abilities.
        </p>
        
        <div className={`projects-filters ${animate ? 'animate' : ''}`}>
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'java' ? 'active' : ''}`}
            onClick={() => setActiveFilter('java')}
          >
            <i className="fab fa-java"></i> Java
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'spring' ? 'active' : ''}`}
            onClick={() => setActiveFilter('spring')}
          >
            <i className="fas fa-leaf"></i> Spring
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'microservices' ? 'active' : ''}`}
            onClick={() => setActiveFilter('microservices')}
          >
            <i className="fas fa-network-wired"></i> Microservices
          </button>
        </div>
        
        <div className={`projects-grid ${isFiltering ? 'filtering' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              className={`project-card ${animate ? 'animate' : ''}`} 
              key={project.id}
              style={{ animationDelay: `${0.1 * (index % 3)}s` }}
            >
              <div className="project-image">
                {project.id === 1 ? (
                  <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt={project.title} />
                ) : project.id === 2 ? (
                  <img src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt={project.title} />
                ) : project.id === 3 ? (
                  <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt={project.title} />
                ) : (
                  <img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt={project.title} />
                )}
                <div className="project-overlay">
                  <div className="project-type">
                    {project.id === 1 && "Library System"}
                    {project.id === 2 && "E-Commerce"}
                    {project.id === 3 && "Banking"}
                    {project.id === 4 && "Task Management"}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i> View Code
                    </a>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects-message">
            <i className="fas fa-search"></i>
            <p>No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 