function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <span className="section-label dark-label">GET IN TOUCH</span>
        <h1>Contact Me</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to collaborate? Send a message below.
        </p>

        <div className="contact-form">
          <div className="input-group">
            <p>Full name</p>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="input-group">
            <p>Email</p>
            <input type="email" placeholder="Your email address" />
          </div>

          <div className="input-group">
            <p>Message</p>
            <textarea placeholder="Write your message here" rows="4"></textarea>
          </div>

          <button href="mailto:eyobtesfaye838@gmail.com" className="primary-pill-btn">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;