import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-intro">
        <p>
          Whether you have a project you&apos;d like to discuss, or just want to
          say hi, I&apos;d love to hear from you! Use the form below to get in
          touch, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          required
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
