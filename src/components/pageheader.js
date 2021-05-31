import React from "react";
import { Container, Section } from "../components/bulma";

export default function PageHeader({ children, title, icon, subtitle }) {
  return (
    <Section id="pageheader">
      <Container className="has-text-centered">  
        <h1 className="title montserrat is-uppercase">
          {icon && <React.Fragment><i className={icon} /><br /></React.Fragment>}
          {title}
        </h1>
        {subtitle && <h2 className="subtitle montserrat has-text-grey">{subtitle}</h2>}
        {children}
        <span className="divider">
          <i className="fa fa-star" />
        </span>
      </Container>
    </Section>
  );
}