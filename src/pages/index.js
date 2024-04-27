import * as React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"

import heroImage from "../assets/images/395934394_296682676581691_2741712652337783543_n.jpg"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = (props) => {
  const {title, description, siteUrl} = get(props, 'data.site.siteMetadata');
  const details = get(props, 'data.contentfulOperatingDetails');
  return (
    <Layout style={pageStyles}>
      <Hero 
        title="Organic Produce and Pumpkin Patch"
        background={heroImage}
      />
      <Article>
        <h2>Dearborn Family Farm is <u class="underline">open</u><br/>seasonally May through October.</h2>
        <h3>On our 12 acre farm we grow produce, herbs, plant starts and flowers using sustainable, organic practices.</h3>
        
        <p>There is a small gift shop and bakery on the property offering goodies such as muffins, pies, cookies, chocolates, caramels, jams, syrups, pickles, dried herbs and spices, teas, vinegars, honey, and other local artisan gifts. We also specialize in huckleberry baked goods and jams. We hope to continue supporting our local community by providing fresh produce and goods. We believe in supporting local farmers and educating the community on the benefits of growing food, nutrition and regenerative farming practices.</p>
      </Article>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    contentfulOperatingDetails(hours: {children: {}}) {
      hours {
        hours
      }
    }
  }
`