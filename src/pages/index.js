import React, { useState } from "react"
import TextLoop from "react-text-loop";
import { Link } from "gatsby"

import { Section, Hero, Container, ColumnContainer, Column } from '../components/bulma';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Video from "../components/video"
import FadeInSection from "../components/fadein"

import HomepageVideo from '../assets/homepage.mp4';
import Scroll from "../components/scroll";

import ShowcaseData from "../../content/showcase.yml"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const my_roles_array = [
  'full-stack software engineer',
  'computer science student',
  'Phi Kappa Theta brother',
  'electronic music producer',
  'burrito enthusiast'
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
      this.section.current.style.transform = `perspective(600px) rotateY(${4*multiplier}deg)`;
    }
  }

  render() {
    return (
      <Section>
        <div ref={this.section} style={{ transformOrigin: '30% 50%', transition: 'transform 0.02s' }}>
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

class SideNav extends React.Component {
  render() {
    return (
      <div className="side-nav">
        
      </div>
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
      <SideNav />
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

      <ColumnContainer className="is-desktop showcase-container">
        <Column>
          <Section id="showcase" className="showcase">
            <Scroll speed={0.7}>
              <div className="decoration-1" />
            </Scroll>
            <Scroll speed={0.8}>
              <div className="decoration-2" />
            </Scroll>
            <Scroll speed={0.5}>
              <div className="decoration-3" />
            </Scroll>
            <Container>
              <h1 className="title brand-font white-shadow">
                Showcase
              </h1>
              <h2 className="subtitle brand-font" style={{ marginBottom: 20 }}>
                Projects I've worked on
              </h2>
            </Container>
            <div style={{ overflow: 'auto', width: '100%', zIndex: 5, paddingTop: 20 }}>
              {ShowcaseData.map(el => (
                <Container className="is-fluid" style={{ marginBottom: 20 }}>
                  <div className="showcase-item box">
                    <h1>{el.title}</h1>
                    {el.tags && <div className="tags">{
                      el.tags.map(tag => <span className="tag is-primary is-light">{tag}</span>)
                    }</div>}
                    <p>{el.description}</p>
                    <br />
                    {el.links && <div className="buttons">
                      {Object.entries(el.links).map(link => (
                        <AniLink cover bg="#ff7a00" duration={0.5} to={link[1]} className="button is-link is-light">{link[0]}</AniLink>
                      ))}
                    </div>}              
                  </div>
                </Container>
              ))}
            </div>
          </Section>
        </Column>
        <Column>
          <Section id="experience" className="experience">
            <Scroll speed={0.9}>
              <div className="decoration-1" />
            </Scroll>
            <Scroll speed={0.4}>
              <div className="decoration-2" />
            </Scroll>
            <Scroll speed={0.2}>
              <div className="decoration-3" />
            </Scroll>
            <Container>
              <h1 className="title brand-font white-shadow">
                Experience
              </h1>
              <h2 className="subtitle brand-font">
                Technologies I use
              </h2>
            </Container>
            <div style={{ overflow: 'auto', width: '100%', zIndex: 5, paddingTop: 20 }}>
              <div className="tag is-large">BIG</div>
            </div>
          </Section>
        </Column>
      </ColumnContainer>
    </Layout>
  );
}

export default IndexPage
