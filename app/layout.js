"use client";

import "./styles/globals.css";
import "./styles/layout.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Komal Badgujar&apos;s Portfolio</title>
        <meta
          name="description"
          content="Komal Badgujar's professional portfolio showcasing web development projects and blogs."
        />
        <meta
          name="keywords"
          content="Komal Badgujar, web development, portfolio, Next.js, React"
        />
        <meta name="author" content="Komal Badgujar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="layout-container">
          <header className="header">
            <div className="header-content">
              <h1>Komal Badgujar&apos;s Portfolio</h1>
              <nav>
                <a
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={`nav-link ${
                    pathname === "/about" ? "active" : ""
                  }`}
                >
                  About
                </a>
                <a
                  href="/portfolio"
                  className={`nav-link ${
                    pathname === "/portfolio" ? "active" : ""
                  }`}
                >
                  Portfolio
                </a>
                <a
                  href="/blog"
                  className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className={`nav-link ${
                    pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>
          <main className="main-content">{children}</main>
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2024 Group 20 | Komal Badgujar | Komal Sharma</p>
              <p>Student IDs: 8969645 | 8968008</p>
              <p>
                <a
                  href="https://github.com/KomalB307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
                {" | "}
                <a
                  href="https://www.linkedin.com/in/komal-badgujar-6082072ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
                {" | "}
                <a href="/resume.pdf" download>
                  Download My Resume
                </a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
