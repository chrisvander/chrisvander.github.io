import React from "react"
import PageHeader from "../components/pageheader";
import Layout from "../components/layout"
import { Container, Section } from "../components/bulma"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout orange>
    <SEO title="Contact Me" />
    <PageHeader 
      title="Contact Me"
      icon="fas fa-address-book" />
    <Section>
      <Container>
        <p>Looks like I don't have anything here! Use the links on top or bottom to get back to the good stuff.</p>
      </Container>
    </Section>
  </Layout>
)

export default ContactPage
