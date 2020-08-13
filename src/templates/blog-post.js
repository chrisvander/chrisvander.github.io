import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Section, Container, ColumnContainer, Column } from "../components/bulma"

const BlogPostTemplate = ({ pageContext: { frontmatter, body, fields } }) => {
  const { title, subtitle, author, date, tags, icon } = frontmatter;
  return (
    <Layout id="blog" whiteLayout>
      <SEO title={title} />
      <PageHeader 
        title={title} 
        subtitle={subtitle} 
        icon={icon ? `fas ${icon}` : ''}>
        <div className="content">2020-02-02</div>
        <div className="tags" style={{ display: 'block' }}>
          {tags && tags.map((e,i) => <span className="tag is-light is-primary" key={i}>{e}</span>)}
        </div>
      </PageHeader>
      <Section>
        <Container>
          <ColumnContainer className="is-centered">
            <Column className="is-9 content">
              <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </Column>
          </ColumnContainer>
        </Container>
      </Section>
      <Section style= {{ backgroundColor: '#EFEFEF' }}>
        <Container>
          <div id="commento" />
        </Container>
      </Section>
    </Layout>
  );
}

export default BlogPostTemplate;