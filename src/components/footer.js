import React from "react"
import { Link } from "gatsby"

const socials = [
  { fa: 'fab fa-facebook', url: 'https://www.facebook.com/cjvanderloo' },
  { fa: 'fab fa-instagram', url: 'https://www.instagram.com/chrisvanderloo/' },
  { fa: 'fab fa-github', url: 'https://github.com/chrisvander' },
  { fa: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/chris-vanderloo/' },

]

export default () => (
  <footer className="footer">
    <div className="brand-font">CJV</div>
    © {new Date().getFullYear()}
    <div className="socials">
      {socials.map(el => (
        <Link to={el.url}>
          <span className="icon">
            <i className={el.fa} />
          </span>
        </Link>
      ))}
    </div>
  </footer>
);