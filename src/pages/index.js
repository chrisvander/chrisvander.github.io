import React, { useState } from "react"
import TextLoop from "react-text-loop";

import { Section, Hero, Container, ColumnContainer, Column } from '../components/bulma';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Video from "../components/video"

import HomepageVideo from '../assets/homepage.mp4';
import ChortexLogo from '../assets/chortex2blk.jpg';
import Scroll from "../components/scroll";

import ShowcaseData from "../../content/showcase.yml"
import ExperienceData from "../../content/experience.yml"

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
  const [ showcase, setShowcaseFilter ] = useState(ShowcaseData);
  const tags = new Set(showcase.map(el => el.tags).flat())
  console.log(tags)
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
              {showcase.map(el => (
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
                        <a href={link[1]} className="button is-link is-light">{link[0]}</a>
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
                Tools I've used or prefer
              </h2><br />
            </Container>
            <div style={{ overflow: 'auto', width: '100%', zIndex: 5, paddingTop: 20 }}>
              {ExperienceData.map(el => el.subcategories ? (
                <Container className="is-fluid" style={{ marginBottom: 20 }}>
                  <div className="experience-items box">
                    <h1 className="secondary-font">{el.category}</h1>
                    <div className="grid-container">
                    {el.subcategories.map(item => (
                      <div>
                        <h2 className="subtitle">{item.title}</h2>
                        <div className="tags">
                          {item.elements.map(text => <span className="tag is-primary is-medium">{text}</span>)}
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </Container>
              ) : <React.Fragment />)}
            </div>
          </Section>
        </Column>
      </ColumnContainer>
      <Section className="chortex has-text-centered">
      <ColumnContainer className="is-vcentered is-centered">
        <Column className="is-4">
          <figure className="image" style={{ minWidth: '100%', maxHeight: 200 }}>
            <img src={ChortexLogo} style={{ maxWidth: 1000, maxHeight: 200 }}/>
          </figure>
        </Column>
        <Column className="is-4">
          <h2>I like to make music in my free time. I have a website for that too - check it out!</h2><br />
          <a className="button is-link" href="http://chortexofficial.com">chortexofficial.com</a>
        </Column>
      </ColumnContainer>
      </Section>
    </Layout>
  );
}

export default IndexPage
