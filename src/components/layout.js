/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, hideNav, shown, noNavPadding, id, orange }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header 
        hide={hideNav} 
        style={{ 
          position: 'fixed', 
          width: '100%'
        }} 
        siteTitle={data.site.siteMetadata.title} />
      <main id={id} style={{ 
        backgroundColor: orange ? '' : 'white', 
        paddingTop: !noNavPadding ? 56 : 0,
      }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
