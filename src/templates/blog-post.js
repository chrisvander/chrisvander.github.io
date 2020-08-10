import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { Section, Container, ColumnContainer, Column } from "../components/bulma"

const BlogPostTemplate = ({ children, pageContext }) => {
  const { title, subtitle, author, date, tags, icon } = pageContext.frontmatter;
  return (
    <Layout whiteLayout>
      <SEO title={title} />
      <PageHeader 
        title={title} 
        subtitle={subtitle} 
        icon={icon ? `fas ${icon}` : ''}>
        <div className="tags" style={{ display: 'block' }}>
          {tags.map((e,i) => <span className="tag is-light is-primary" key={i}>{e}</span>)}
        </div>
      </PageHeader>
      <Section>
        <Container>
          <ColumnContainer className="is-centered">
            <Column className="is-9 content">
              {children}
            </Column>
          </ColumnContainer>
        </Container>
      </Section>
      <Section style= {{ backgroundColor: '#EFEFEF' }}>
        <Container>
          
        </Container>
      </Section>
    </Layout>
  );
}

export default BlogPostTemplate;