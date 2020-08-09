import React from "react";
import Layout from "../components/layout";
import { Container, Section } from "../components/bulma";
import SEO from "../components/seo"
import PageHeader from "../components/pageheader";

export default () => {
  return (
    <Layout id="blog" whiteLayout>
      <SEO title="Blog" />
      <PageHeader 
        title="The Blog" 
        subtitle="My place to talk technology." 
        icon="fas fa-newspaper" />
    </Layout>
  );
}