import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageheader"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Section, Container, ColumnContainer, Column } from "../components/bulma"
import TextSection from "../components/textcontainer";
import { Helmet } from "react-helmet";

const BlogPostTemplate = ({ pageContext: { frontmatter, body, fields } }) => {
  const { title, subtitle, author, date, tags, icon } = frontmatter;
  return (
    <Layout id="blog" whiteLayout>
      <SEO title={title} />
      <Helmet>
        <script 
          defer 
          data-no-fonts="true" 
          src="https://commento.chrisvanderloo.com/js/commento.js" />
        <script src="https://cdn.commento.io/js/count.js" />
      </Helmet>
      <PageHeader 
        title={title} 
        subtitle={subtitle} 
        icon={icon ? `fas ${icon}` : ''}>
        <div className="content">2020-02-02</div>
        <div className="tags" style={{ display: 'block' }}>
          {tags && tags.map((e,i) => <span className="tag is-light is-primary" key={i}>{e}</span>)}
        </div>
        <a href="#commento" />
      </PageHeader>
      <TextSection>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </TextSection>
      <Section style= {{ backgroundColor: '#F6F6F6', minHeight: 600 }}>
        <Container>
          <h1 class="title">Comments</h1>
          <div id="commento" />
        </Container>
      </Section>
    </Layout>
  );
}

export default BlogPostTemplate;