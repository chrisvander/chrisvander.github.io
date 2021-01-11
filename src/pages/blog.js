import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import PageHeader from "../components/pageheader";
import { Container, Section, Tile, TileChild, TileAncestor, TileParent } from '../components/bulma';

export default () => {
  return (
    <Layout id="blog" whiteLayout>
      <SEO title="Blog" />
      <PageHeader 
        title="Personal Blog" 
        icon="fas fa-newspaper" />
      <Section>
        <Container>
          <div id="searchBox" className="control has-icons-left has-icons-right">
            <input className="input is-large" type="text" placeholder="Search" />
            <span className="icon is-medium is-left">
              <i className="fas fa-search" />
            </span>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <TileAncestor>
            <TileParent className="is-4 is-vertical">
              <TileChild>
                <h1 className="title montserrat">Categories</h1>
              </TileChild>
              <TileChild>
                <h1 className="title montserrat">Tags</h1>
              </TileChild>
            </TileParent>
            <TileParent className="is-vertical">
              <TileChild>
                <h1 className="title montserrat">Top Posts</h1>
              </TileChild>
              <TileChild>
                <h1 className="title montserrat">All Posts</h1>
              </TileChild>
            </TileParent>
          </TileAncestor>
        </Container>
      </Section>
    </Layout>
  );
}