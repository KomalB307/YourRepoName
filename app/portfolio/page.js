import "../styles/portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-intro">
        <p>
          Here are some of the projects I&apos;ve worked on. Each project
          demonstrates my ability to solve complex problems, create functional
          user interfaces, and deliver a great user experience. Click on the
          project titles to view the source code on GitHub.
        </p>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">React Weather App</h3>
          <p className="portfolio-item-description">
            A weather application built with React that fetches real-time
            weather data for any location using the OpenWeather API.
          </p>
          <a
            href="https://github.com/KomalB307/React-Weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View the project on GitHub
          </a>
        </div>
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">Recipe Finder</h3>
          <p className="portfolio-item-description">
            A simple recipe finder app where users can search for recipes by
            ingredient, utilizing the Spoonacular API.
          </p>
          <a
            href="https://github.com/KomalB307/recipe-finder.git"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View the project on GitHub
          </a>
        </div>
        <div className="portfolio-item">
          <h3 className="portfolio-item-title">Quotes API</h3>
          <p className="portfolio-item-description">
            An application that displays random quotes on different topics,
            pulling quotes from a custom-built API.
          </p>
          <a
            href="https://github.com/KomalB307/quotesapi.git"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View the project on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
