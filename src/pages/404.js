import React from "react"

import Layout from "../components/layout"
import { Container, Section } from "../components/bulma"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout orange>
    <SEO title="404: Not found" />
    <Container>
      <Section>
        <div className="you-are-lost">
          <h1 className="white-shadow">404</h1>
          <p style={{ maxWidth: 400 }}>Looks like I don't have anything here! Use the links on top or bottom to get back to the good stuff.</p>
        </div>
      </Section>
    </Container>
  </Layout>
)

export default NotFoundPage
