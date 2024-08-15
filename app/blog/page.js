import "../styles/blog.css";

export default function Blog() {
  return (
    <div className="blog-container">
      <h2 className="blog-title">My Blog</h2>
      <div className="blog-intro">
        <p>
          I love sharing what I&apos;ve learned through writing. My blog covers
          various topics related to web development, including tutorials, tips,
          and insights into the latest technologies. I hope you find these
          articles helpful!
        </p>
      </div>
      <div className="blog-list">
        <div className="blog-post">
          <img
            src="/React-js.jpg"
            alt="Introduction to React"
            className="blog-post-image"
          />
          <div className="blog-post-content">
            <h3 className="blog-post-title">Introduction to React</h3>
            <p className="blog-post-excerpt">
              React is a powerful JavaScript library for building user
              interfaces. In this post, I explore the basics of React and how
              you can get started.
            </p>
            <a
              href="https://medium.com/@badgujarumed30/introduction-to-react-building-dynamic-user-interfaces-fdb16ba68e2a"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              Read more on Medium
            </a>
          </div>
        </div>
        <div className="blog-post">
          <img
            src="/next-js.jpg"
            alt="Getting Started with Next.js"
            className="blog-post-image"
          />
          <div className="blog-post-content">
            <h3 className="blog-post-title">Getting Started with Next.js</h3>
            <p className="blog-post-excerpt">
              Next.js is a popular framework for building server-rendered React
              applications. Learn the essentials of Next.js in this
              comprehensive guide.
            </p>
            <a
              href="https://medium.com/@badgujarumed30/getting-started-with-next-js-a-comprehensive-guide-7ead0199211c"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              Read more on Medium
            </a>
          </div>
        </div>
        <div className="blog-post">
          <img
            src="/css-grid.jpg"
            alt="Understanding CSS Grid"
            className="blog-post-image"
          />
          <div className="blog-post-content">
            <h3 className="blog-post-title">Understanding CSS Grid</h3>
            <p className="blog-post-excerpt">
              CSS Grid is a powerful layout system that allows for the creation
              of complex web layouts. Discover how to use CSS Grid in your
              projects.
            </p>
            <a
              href="https://medium.com/@badgujarumed30/understanding-css-grid-the-future-of-web-layouts-f3c0fbd4bdae"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-post-link"
            >
              Read more on Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
