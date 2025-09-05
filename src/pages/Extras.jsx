import React from "react";

const Extras = () => {
  return (
    <section className="extras">
      <h2>Career-Boosting Extras</h2>
      <div className="extras-grid">
        {/* Resume */}
        <div className="extras-box">
          <h3>📄 Resume</h3>
          <p>
            Want to know more about my journey and technical background? Download my full résumé below.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
            Download Resume
          </a>
        </div>

        {/* Testimonials */}
        <div className="extras-box">
          <h3>💬 Testimonials</h3>
          <p>Here’s what my mentors and peers say about working with me:</p>
          <blockquote>
            “Munaza is a dedicated developer who learns fast, solves problems creatively, and collaborates with empathy.”
          </blockquote>
          <blockquote>
            “She consistently delivers polished, professional work a true asset to any team.”
          </blockquote>
        </div>

        {/* Blog */}
        <div className="extras-box">
          <h3>✍️ Blog Post</h3>
          <p>
            I documented my experience building this portfolio. Read my blog post where I share insights, mistakes, and lessons learned.
          </p>
          <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="btn">
            Read My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Extras;