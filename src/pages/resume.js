import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"
import { Container, Section, ColumnContainer, Column } from "../components/bulma";
import SEO from "../components/seo"
import PageHeader from "../components/pageheader";

import Resume from '../assets/ChrisVanderloo_Resume.pdf';

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MyH1 = props => <h1 className="textTitle title brand-font" {...props} />
const MyH2 = props => <h2 className="subtitle montserrat" {...props} />
const MyUL = props => <ul className="content" {...props} />

const components = {
  h1: MyH1,
  h2: MyH2,
  ul: MyUL
}

export default ({ data: { mdx } }) => {
  return (
    <Layout id="resume">
      <SEO title="Resume" />
      <PageHeader
        title="Resume"
        subtitle="My experiences and work."
        icon="fas fa-file-alt">
        <a className="button is-info" href={Resume}>
          <i className="fas fa-download" />&nbsp;
          Download PDF
        </a>
      </PageHeader>
      <Section>
        <Container className="content extra-padding">
          <ColumnContainer className="is-centered">
            <Column className="is-two-thirds">
              <MDXProvider components={components}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </Column>
          </ColumnContainer>
        </Container>
      </Section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ResumeQuery {
    mdx(frontmatter: {title: {eq: "Resume"}}) {
      id
      body
    }
  }
`