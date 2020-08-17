/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Layout = ({ 
  children, 
  hideNav, 
  shown, 
  noNavPadding, 
  id, 
  orange,
  whiteLayout,
  stickyNav,
  fullWidth
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [ navHidden, setNavHidden ] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    setNavHidden(currPos.y > -300)
  })

  return (
    <React.Fragment>
      <Header 
        hide={hideNav}
        addContainer={!fullWidth}
        transparent={whiteLayout}
        siteTitle={data.site.siteMetadata.title} />
      {stickyNav && <Header 
        hide={navHidden} 
        sticky
        addContainer={!fullWidth}
        transparent={whiteLayout}
        siteTitle={data.site.siteMetadata.title} />}
      <main id={id} style={{ 
        backgroundColor: orange ? '' : 'white', 
        paddingTop: !noNavPadding ? 56 : 0
      }}>{children}</main>
      <Footer addPadding={!fullWidth} whiteLayout={whiteLayout} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
