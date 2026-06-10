import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    
    // Capture form values before state reset
    const { name, email, subject, message } = formState;

    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon. 🎉' });
      setFormState({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      const mailtoLink = `mailto:alifhossain72003@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');

      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="gradient-line"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>Let's Build Something Great</h3>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              Whether you have a question, a project idea, or just want to say hi — 
              feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">Email</div>
                  <div className="detail-value">
                    <a href="mailto:alifhossain72003@gmail.com">alifhossain72003@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaLinkedin size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">LinkedIn</div>
                  <div className="detail-value">
                    <a href="https://linkedin.com/in/md-alif-hossain-a00537345" target="_blank" rel="noopener noreferrer">Md Alif Hossain</a>
                  </div>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <div className="detail-label">Location</div>
                  <div className="detail-value"> Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://linkedin.com/in/md-alif-hossain-a00537345" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/alifhossainmia" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://instagram.com/alifhossainmia.alif" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="mailto:alifhossain72003@gmail.com" className="contact-social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <form className="contact-form glass-card reveal-right" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={formState.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" value={formState.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Discussion" value={formState.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." value={formState.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
            
            {status && (
              <div className={`form-status ${status.type}`} style={{ display: 'block' }}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
