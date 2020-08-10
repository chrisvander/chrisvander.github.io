import React from "react"

const socials = [
  { fa: 'fab fa-facebook', url: 'https://www.facebook.com/cjvanderloo' },
  { fa: 'fab fa-instagram', url: 'https://www.instagram.com/chrisvanderloo/' },
  { fa: 'fab fa-github', url: 'https://github.com/chrisvander' },
  { fa: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/chris-vanderloo/' },

]

export default ({ addPadding, whiteLayout }) => (
  <footer className={`footer${whiteLayout ? " whiteLayout" : ""}${addPadding ? " addPadding" : ""}`}>
    <div className="brand">
      <div className="brand-font">CJV</div>
      <div className="year-text">© {new Date().getFullYear()}</div>
    </div>
    <div className="socials">
      {socials.map(el => (
        <a href={el.url}>
          <span className="icon">
            <i className={el.fa} />
          </span>
        </a>
      ))}
    </div>
    <span className="smalltext">This website was built using Bulma, Gatsby, React, SCSS.</span>
  </footer>
);