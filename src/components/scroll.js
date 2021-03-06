import React from "react"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export default class Scroll extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.container = React.createRef();

    let { speed } = props;
    if (isNaN(speed)) speed = 1
    this.multiplier = 1 - speed;
  }

  onScroll() {
    let offset = window.scrollY - this.containerOffset;
    if (this.container.current) {
      this.container.current.style.transform = `translate3d(0, ${this.multiplier * offset}px, 0)`
    }
  }

  componentDidMount() {
    const boundingBox = this.container.current.getBoundingClientRect()
    console.log(this.props.offset)
    this.containerOffset = boundingBox.top + this.props.offset ? this.props.offset : 0;
    this.onScroll();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render(){
    let { children, style } = this.props;
    return (<div style={{ 
      ...style,
      display: 'inline-block'
    }} ref={this.container}>{children}</div>);
  }
}


