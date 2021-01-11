import React, { useEffect } from "react"
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

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   document.getElementById('commento').innerHTML = "";

  //   script.src = "https://commento.chrisvanderloo.com/js/commento.js";
  //   script['data-no-fonts'] = 'true';
  //   script.defer = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

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