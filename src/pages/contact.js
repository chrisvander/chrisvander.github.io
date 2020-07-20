import React from "react"

import Layout from "../components/layout"
import { Container, Section } from "../components/bulma"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout orange>
    <SEO title="Contact Me" />
    <Container>
      <Section>
        <h1 className="title">Contact Me</h1>
        <p style={{ maxWidth: 400 }}>Looks like I don't have anything here! Use the links on top or bottom to get back to the good stuff.</p>
      </Section>
    </Container>
  </Layout>
)

export default ContactPage
