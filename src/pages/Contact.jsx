import React from 'react'

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-content">
      <h2>Contact Me</h2>
      <p>💬 Do you have a question or suggestion?</p>
      <p>📩 I’d love to hear from you! Feel free to reach out or follow me on social media.</p>
      
      <ul className="social-links">
        <li>
          <a 
            href="https://www.linkedin.com/in/munaza-hazrati-669468203" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a 
            href="https://github.com/munaza51" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a href="mailto:hazratimunaza@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </li>
      </ul>

      <div className="cta">
        <a href="mailto:hazratimunaza@gmail.com" className="btn">Let’s Connect 🚀</a>
      </div>
    </div>

    <div className="contact-img">
      <img 
        src="https://t4.ftcdn.net/jpg/03/14/34/87/360_F_314348719_6CxqaGP9rfDJwnB1RjntD6V7C6K0Ou6K.jpg" 
        alt="Typing on a keyboard"
      />
    </div>
  </section>
)

export default Contact
