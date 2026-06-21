import { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [focused, setFocused] = useState(null);
  const [error, setError] = useState(null);
  
  const formRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    observer.observe(document.querySelector('#contact'));
    
    return () => observer.disconnect();
  }, []);
  
  const handleFocus = (field) => {
    setFocused(field);
  };
  
  const handleBlur = () => {
    setFocused(null);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // EmailJS configuration
    // To make this work, you need to:
    // 1. Sign up at https://www.emailjs.com/
    // 2. Create an email service (Gmail)
    // 3. Create an email template
    // 4. Get your Public Key from Account page
    // 5. Replace the values below
    
    const serviceID = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
    const templateID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
    const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'user_ABCDefgh123456'
    
    // Template should include these variables: {{name}}, {{email}}, {{subject}}, {{message}}
    
    emailjs.sendForm(
      serviceID,
      templateID,
      formRef.current,
      publicKey
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormSubmitted(true);
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setError('Failed to send message. Please email me directly at sandesh19yadav@gmail.com');
        setLoading(false);
      });
  };

  // Social media links
  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/sandesh1925',
      icon: 'fab fa-github'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sandesh-yadav-7571aa215',
      icon: 'fab fa-linkedin'
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:sandesh19yadav@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      id: 'phone',
      name: 'Phone',
      url: 'tel:+917697807800',
      icon: 'fas fa-phone'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className={`section-title ${animate ? 'animate' : ''}`}>
          <span className="title-accent">Get In</span> Touch
        </h2>
        
        <p className={`contact-subtitle ${animate ? 'animate' : ''}`}>
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
        </p>
        
        <div className={`contact-container ${animate ? 'animate' : ''}`}>
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>I'm currently open for freelance work and full-time opportunities. Connect with me via phone, email or social media.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Indore, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>sandesh19yadav@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 7697807800</p>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <h4>Find me on</h4>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a 
                    key={link.id} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="social-link"
                  >
                    <i className={link.icon}></i>
                    <span className="tooltip">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send me a Message</h3>
              <p>I'll get back to you as soon as possible</p>
            </div>
            
            {formSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className={`form-group ${focused === 'name' ? 'focused' : ''}`}>
                  <label htmlFor="name">Your Name</label>
                  <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required 
                    />
                  </div>
                </div>
                
                <div className={`form-group ${focused === 'email' ? 'focused' : ''}`}>
                  <label htmlFor="email">Your Email</label>
                  <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required 
                    />
                  </div>
                </div>
                
                <div className={`form-group ${focused === 'subject' ? 'focused' : ''}`}>
                  <label htmlFor="subject">Subject</label>
                  <div className="input-container">
                    <i className="fas fa-pencil-alt"></i>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      required 
                    />
                  </div>
                </div>
                
                <div className={`form-group ${focused === 'message' ? 'focused' : ''}`}>
                  <label htmlFor="message">Message</label>
                  <div className="input-container">
                    <i className="fas fa-comment-alt"></i>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      required 
                    ></textarea>
                  </div>
                </div>
                
                {error && <div className="form-error">{error}</div>}
                
                <button 
                  type="submit" 
                  className="btn btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'} 
                  {!loading && <i className="fas fa-paper-plane"></i>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      <div className="contact-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact; 