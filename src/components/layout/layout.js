import * as React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {Season} from "../season"
import Header from "../header"
import Footer from "../footer"

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 821px) {
    max-width: var(--maxWidth);
  }
`;
const Content = styled.main`
  position: relative;
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  min-width: var(--maxWidth);
  background: rgba(255,255,255,0.75);
  z-index: 1;
  @media screen and (min-width: 821px) {
    border-width: 1px;
    border-color: rgba(0,0,0,0.1);
    border-style: solid;
  }
`;
const Huckle = styled.div`
  position: fixed;
  top: -32px;
  right: -120px;
  opacity:0.5;
  z-index: 0;
  img{width:250px;}
  @media screen and (min-width: 821px) {
    img{width:500px;}
  }
`;

const Pump = styled.div`
  position: fixed;
  bottom: -50px;
  left: -120px;
  opacity:1;
  z-index: 0;
  img{width:250px;}
  @media screen and (min-width: 821px) {
    bottom: -120px;
    img{width:600px;}
  }
`;

const Layout = (props) => {
  const query = useStaticQuery(graphql`
    query LayoutQuery {
      pumpImage: file(relativePath: { eq: "pumpkins.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      huckleImage: file(relativePath: { eq: "huckleberries.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  const pumpImage = getImage(query.pumpImage);
  const huckleImage = getImage(query.huckleImage);
  return (
    <Container>
        <Content>
            <Season />
            <Header />
            {props.children}
        </Content>
        <Footer />
        <Huckle>
          <GatsbyImage image={huckleImage} alt="" />
        </Huckle>
        <Pump>
          <GatsbyImage image={pumpImage} alt="" />
        </Pump>
    </Container>
  )
}

export default Layout