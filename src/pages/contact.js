import React from "react"
import PageHeader from "../components/pageheader";
import Layout from "../components/layout"
import { Container, Section } from "../components/bulma"
import TextSection from "../components/textcontainer";
import SEO from "../components/seo"

const socials = [
  {
    "name": "Facebook",
    "icon": "fab fa-facebook",
    "color": "#4267B2",
    "url": "https://facebook.com/cjvanderloo"
  },
  {
    "name": "Instagram",
    "icon": "fab fa-instagram",
    "color": "#E1306C",
    "url": "https://www.instagram.com/chrisvanderloo"
  },
  {
    "name": "GitHub",
    "icon": "fab fa-github",
    "color": "#24292e",
    "url": "https://github.com/chrisvander"
  },
  {
    "name": "LinkedIn",
    "icon": "fab fa-linkedin",
    "color": "#2867B2",
    "url": "https://www.linkedin.com/in/chris-vanderloo/"
  }
]

const CustomA = (props) => <a style={{ 'alignItems': 'stretch', 'display': 'block', 'flexBasis': 0, 'flexGrow': 1 }} {...props} />

const ContactPage = () => (
  <Layout orange>
    <SEO title="Contact Me" />
    <PageHeader 
      title="Contact Me"
      icon="fas fa-address-book" />
    <TextSection>
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile is-parent">
            {socials.map(({ name, icon, color, url }) => (
              <CustomA href={url}>
                <div className="tile is-parent">
                  <div className="tile is-child box" style={{ 'backgroundColor': color, color: 'white' }}>
                    <h1 className="has-text-centered has-text-white"><i className={icon} /></h1>
                    <h1 className=" has-text-centered title has-text-white">{name}</h1>
                  </div>
                </div>
              </CustomA>
            ))}
          </div>
          <div className="tile is-parent">
            <CustomA href="mailto:chris.vanderloo@yahoo.com">
              <div className="tile is-parent">
                <div className="tile is-child box content has-text-centered" style={{ 'backgroundColor': '#ff7a00', color: 'white' }}>
                  <h1 className="has-text-centered has-text-white"><i className='fas fa-envelope' /></h1>
                  <h1 className="has-text-centered has-text-white title">Email</h1>
                  <a href="mailto:chris.vanderloo@yahoo.com" className="subtitle has-text-white">chris.vanderloo@yahoo.com</a>
                </div>
              </div>
            </CustomA>
            <CustomA href="tel:+15183088377">
              <div className="tile is-parent">
                <div className="tile is-child box content has-text-centered" style={{ 'backgroundColor': '#7300ff', color: 'white' }}>
                  <h1 className="has-text-white"><i className='fas fa-phone-alt' /></h1>
                  <h1 className="has-text-white title">Phone</h1>
                  <a href="tel:+15183088377" className="subtitle has-text-white">(518) 308-8377</a>
                </div>
              </div>
            </CustomA>
          </div>
        </div>
      </div>
    </TextSection>
    
  </Layout>
)

export default ContactPage
