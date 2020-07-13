import React from "react";
import Layout from "../components/layout";
import { Container, Section, ColumnContainer, Column } from "../components/bulma";

export default () => {
  return (
    <Layout id="resume">
      <Section>
        <Container>
          <ColumnContainer>
            <Column className="is-3">            
              <aside className="menu">
                <p className="menu-label">
                  General
                </p>
                <ul className="menu-list">
                  <li><a className="is-active">Dashboard</a></li>
                  <li><a>Customers</a></li>
                </ul>
              </aside>
            </Column>
            <Column className="resume">
              <h1 className="title">Resume</h1>
              <p>Something else</p>
            </Column>
          </ColumnContainer>
        </Container>
      </Section>
    </Layout>
  );
}