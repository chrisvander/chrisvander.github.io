import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle, hideBrand }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand" style={{ overflow: 'none' }}>
        <AniLink cover bg="#ff7a00" duration={0.6} to="/" className="navbar-item brand-font is-size-4">
          {siteTitle}
        </AniLink>
        <span 
          onClick={() => setBurgerActive(!burgerActive)} 
          className={`navbar-burger burger ${burgerActive ? 'is-active' : ''}`} 
          data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className={`navbar-menu ${burgerActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <AniLink cover bg="#ff7a00" duration={0.6} to="/projects" className="navbar-item">
            Projects
          </AniLink>
          <AniLink cover bg="#ff7a00" duration={0.6} to="/resume" className="navbar-item">
            Resume
          </AniLink>
          <span className="navbar-item">
            <a className="button is-transparent is-primary is-inverted">
              <span className="icon">
                <i className="fab fa-github"></i>
              </span>
              <span>@chrisvander</span>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
