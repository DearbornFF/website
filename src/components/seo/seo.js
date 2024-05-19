import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const SEO = ({ siteName, title, description, pathname, children }) => {
    const { siteName: defaultSiteName, title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
  
    const seo = {
        siteName: siteName || defaultSiteName,
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

  return (
    <>
        <title>{seo.siteName} - {seo.title}</title>
        <meta name="description" content={seo.description} />
        {children}
    </>
  )
}
export default SEO;