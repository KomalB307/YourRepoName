import "./styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img
        src="/profile.jpg"
        alt="Komal Badgujar"
        className="home-profile-image"
      />
      <h1 className="home-title">Welcome to My Digital Playground</h1>
      <p className="home-subtitle">
        Discover My Projects, Skills, and Passion for Web Development
      </p>
      <section className="home-intro">
        <p>
          Hi! I&apos;m Komal Badgujar, a dedicated and passionate web developer
          specializing in building modern, responsive, and user-friendly web
          applications. With a strong foundation in web technologies such as
          HTML, CSS, JavaScript, and React, I bring ideas to life through code.
        </p>
        <p>
          This portfolio showcases some of my favorite projects, technical
          blogs, and information about my journey as a developer. Feel free to
          explore and learn more about my work and the skills I bring to the
          table.
        </p>
      </section>
      <section className="home-cta">
        <a href="/portfolio" className="home-cta-link">
          Explore My Work
        </a>
      </section>
    </div>
  );
}
