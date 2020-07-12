import React, { useState } from "react"
import TextLoop from "react-text-loop";
import { Link } from "gatsby"

import { Section, Hero, Container } from '../components/bulma';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Video from "../components/video"

import HomepageVideo from '../assets/homepage.mp4';

const my_roles_array = [
  'full-stack software engineer', 
  'web developer', 
  'dubstep producer',
  'Chipotle addict'
]

const IndexPage = () => {
  const [ videoLoaded, setVideoLoaded ] = useState(false);
  const fadeIn = () => setVideoLoaded(true);
  return (
    <Layout hideNav>
      <SEO title="Home" />
      <Hero className="is-primary is-fullheight">
        <div className={`video-container ${videoLoaded ? '' : 'hidden'}`}>
          <Video source={HomepageVideo} loaded={fadeIn} />
        </div>
        <div className="hero-head">
          <Header siteTitle="" />
        </div>
        <div className="hero-body">
          <div className="container is-size-1 secondary-font">
            <Section>
              My name is&nbsp;
              <span className="has-text-weight-bold">
                Chris Vanderloo
              </span>
              <div style={{ display: 'flex' }}>
                I am a&nbsp;
                <div className="inline-stack ">
                  <TextLoop springConfig={{ stiffness: 260, damping: 30 }} interval={3000}>
                    {my_roles_array.map(
                      text => <div className="item">{text}</div>
                    )}
                  </TextLoop>
                </div>
              </div>
            </Section>
            <Section />
          </div>
        </div>
      </Hero>


      <Section>
        <Container>
          <h1 className="title">
            Bulma
          </h1>

          <p className="subtitle">
            Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
          </p>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Input" />
            </div>
          </div>

          <div className="field">
            <p className="control">
              <span className="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </div>

          <div className="buttons">
            <a className="button is-primary">Primary</a>
            <a className="button is-link">Link</a>
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </Container>
      </Section>
    </Layout>
  );
}

export default IndexPage
