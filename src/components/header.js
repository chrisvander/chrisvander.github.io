import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle, hideBrand, hide, style }) => {
  const [burgerActive, setBurgerActive] = useState(false);
  return (
    <nav 
      style={{
        ...style, 
        opacity: `${hide ? '0' : '1'}`,
        transform: `translateY(${hide ? '-100%' : '0'})`,
        transition: 'transform 0.5s opacity 0.5s'
      }} 
      className="navbar is-primary">
      <div className="navbar-brand" style={{ overflow: 'none', paddingLeft: 20 }}>
        {siteTitle !== "" && <AniLink cover bg="#ff7a00" duration={0.6} to="/" className="navbar-item brand-font is-size-4">
          {siteTitle}
        </AniLink>}
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
        <div className="navbar-end" style={{ paddingRight: 20 }}>
          <AniLink cover bg="#ff7a00" duration={0.5} to="/blog" className="navbar-item">
            Blog
          </AniLink>
          <AniLink cover bg="#ff7a00" duration={0.5} to="/resume" className="navbar-item">
            Resume
          </AniLink>
          <AniLink cover bg="#ff7a00" duration={0.5} to="/contact" className="navbar-item">
            <div class="button is-primary is-inverted">Reach Out!</div>
          </AniLink>
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
