import React from "react";
import { Container, Section, ColumnContainer, Column } from "./bulma";

const TextSection = ({ children }) => (
  <Section>
    <Container>
      <ColumnContainer className="is-centered">
        <Column className="is-9 content">
          {children}
        </Column>
      </ColumnContainer>
    </Container>
  </Section>
);

export default TextSection;