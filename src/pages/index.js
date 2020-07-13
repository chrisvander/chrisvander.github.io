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
import Scroll from "../components/scroll";

const my_roles_array = [
  'full-stack software engineer',
  'electronic music producer',
  'Phi Kappa Theta brother',
  'burrito enthusiast',
  'decent boyfriend'
]

class HomeHeroText extends React.Component {
  constructor(props) {
    super(props);
    this.onMove = this.onMove.bind(this);
    this.section = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMove);
  }

  onMove(evt) {
    if (this.section.current) {
      let windowHalf = window.innerWidth/2;
      let mousePos = evt.clientX;
      let multiplier = (mousePos-windowHalf)/windowHalf;
      this.section.current.style.transform = `perspective(900px) rotateY(${4*multiplier}deg)`;
    }
  }

  render() {
    return (
      <Section>
        <div ref={this.section} style={{ transition: 'transform 0.02s' }}>
          <span className="has-text-weight-bold brand-font">
            Chris Vanderloo
          </span>
          <div style={{ display: 'flex' }}>
            <div className="inline-stack is-size-1 softer">
              <TextLoop springConfig={{ stiffness: 260, damping: 30 }} interval={3000}>
                {my_roles_array.map(
                  text => <div className="item">{text}</div>
                )}
              </TextLoop>
            </div>
          </div>
        </div>
      </Section>
    )
  }
}

const IndexPage = () => {
  const [ videoLoaded, setVideoLoaded ] = useState(false);
  const [ navHidden, setNavHidden ] = useState(true);
  const fadeIn = () => setVideoLoaded(true);
  return (
    <Layout id="homepage" noNavPadding hideNav={navHidden}>
      <SEO title="Home" />
      <Hero className="is-primary is-fullheight">
        <div className={`video-container ${videoLoaded ? '' : 'hidden'}`}>
          <Scroll speed={0.4}>
            <Video style={{ maxWidth: 'none', minWidth: '100%', minHeight: '100vh' }} source={HomepageVideo} loaded={fadeIn} />
          </Scroll>
        </div>
        <div className="hero-head">
          <Header siteTitle="" />
        </div>
        <div className="hero-body">
          <Scroll speed={0.7} offset={2} style={{ height: '100%', width: '100%' }}>
            <div className="container is-huge secondary-font">
              <HomeHeroText />
              <Section />
            </div>
          </Scroll>
        </div>
        <div className="hero-foot scroll-down">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down" />
        </div>
      </Hero>

      <Section id="showcase" className="showcase">
        <Container>
          <h1 className="title brand-font white-shadow">
            Showcase
          </h1>
          <p className="subtitle">
            Some of the work I've done in the past.
          </p>
        </Container>
      </Section>

      <Section id="experience" className="experience">
        <Container>
          <h1 className="title brand-font white-shadow">
            Experience
          </h1>
          <p className="subtitle">
            Some of the work I've done in the past.
          </p>
        </Container>
      </Section>
    </Layout>
  );
}

export default IndexPage
