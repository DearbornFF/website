import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import get from "lodash/get"

import Layout from "../components/layout"

const ImageObject = (file) => {

    return (
        <div>
            <img src={file.file.url} alt="" width="250" />
        </div>

    )

}

const GalleryPage = (props) => {
    const images = get(props, 'data.allContentfulAsset.edges');

  return (
    <Layout>
        {images.map((key, index) => <div>
            <ImageObject file={key.node.file} alt="" />
        </div>)}
    </Layout>
  )
}

export default GalleryPage

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulAsset {
        edges {
          node {
            id
            file {
              url
              fileName
              contentType
            }
            filename
            gatsbyImage
          }
        }
      }
  }
`