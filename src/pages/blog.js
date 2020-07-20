import React from "react";
import Layout from "../components/layout";
import { Container, Section } from "../components/bulma";
import SEO from "../components/seo"

export default () => {
  return (
    <Layout id="blog" addPadding whiteLayout>
      <SEO title="Blog" />
      <Section>
        <div className="container">
          
          <h1 className="title montserrat is-uppercase"><i className="fas fa-newspaper" /><br />The Blog</h1>
          <h2 className="subtitle montserrat has-text-grey">Details and thoughts on various topics.</h2>
          <span className="divider">
            <i className="fa fa-star" />
          </span>
        </div>
        

      </Section>
    </Layout>
  );
}