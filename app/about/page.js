import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p>
          I&apos;m Komal Badgujar, a web developer with a passion for creating
          beautiful and functional web experiences. My journey in web
          development began during my time at Conestoga College, where I honed
          my skills in front-end and back-end development.
        </p>
        <p>
          Over the years, I&apos;ve developed a deep understanding of various
          web technologies, including HTML, CSS, JavaScript, and modern
          frameworks like React and Next.js. I&apos;ve worked on a variety of
          projects, from small business websites to complex web applications,
          each project teaching me something new and helping me grow as a
          developer.
        </p>
        <p>
          When I&apos;m not coding, I enjoy exploring the latest trends in
          technology, contributing to open-source projects, and writing
          technical blogs to share my knowledge with the community.
        </p>
      </div>
      <div className="about-skills">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>HTML5 & CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React & Next.js</li>
          <li>Responsive Web Design</li>
          <li>Version Control (Git & GitHub)</li>
          <li>API Integration</li>
        </ul>
      </div>
      <div className="about-experience">
        <h3>Experience</h3>
        <ul className="experience-list">
          <li>
            <strong>Freelance Web Developer</strong> - Created custom websites
            for small businesses, ensuring they were responsive, SEO-friendly,
            and aligned with client goals.
          </li>
        </ul>
      </div>
    </div>
  );
}
