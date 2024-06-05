import * as React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { getImage } from "gatsby-plugin-image"
import get from "lodash/get"

import renderOptions from "../hooks/render-options"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article"
import Column from "../components/column"
import Sidebar, {SidebarSection} from "../components/sidebar"

const DirectionsPage = (props) => {
  const page = get(props, 'data.contentfulPages');
  const details = get(props, 'data.contentfulOperatingDetails');
  const heroImage = getImage(props.data.file);
  return (
    <Layout>
      <Hero 
        title={props.data.contentfulPages.header.header}
        background={heroImage}
        position="-25%"
        height="40vh"
        className="small"
      />
      <Article>
        <Column flex="4 0 0">
          {renderRichText(page.content, renderOptions)}
        </Column>
        <Sidebar>
          <SidebarSection>
            <h5>For your visit</h5>
            {renderRichText(details.visitRecommendations)}
          </SidebarSection>
          <SidebarSection>
            <h5>Hours</h5>
            {renderRichText(details.hours)}
          </SidebarSection>
          <SidebarSection>
            <h5>Address</h5>
            <p>{details.location}</p>
          </SidebarSection>
          <SidebarSection>
            <h5>Contact</h5>
            <p><a href="mailto:info@dearbornfamilyfarm.com">info@dearbornfamilyfarm.com</a></p>
          </SidebarSection>
          <SidebarSection>
            <h5>Parking</h5>
            <p>{details.parking.parking}</p>
          </SidebarSection>
          <SidebarSection>
            <h5><a href="https://www.facebook.com/profile.php?id=100087198810467">Find us on Facebook</a></h5>
          </SidebarSection>
        </Sidebar>
      </Article>
    </Layout>
  )
}

export default DirectionsPage

export const Head = (props) => (
  <>
    <html lang="en" />
    <Seo 
      title={props.data.contentfulPages.title} 
      description={props.data.contentfulPages.description.description}>
    </Seo>
  </>
)

export const pageQuery = graphql`
  query IndexQuery {
    contentfulOperatingDetails{
      hours {
        raw
      }
      location
      parking {
        parking
      }
      visitRecommendations{
        raw
      }
    }
    file(relativePath: { eq: "396175471_296682689915023_8972487937204021691_n.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    contentfulPages(slug: { eq: "directions" }) {
      label
      header{
        header
      }
      description {
        description
      }
      content{
        raw
      }
    }
  }
`