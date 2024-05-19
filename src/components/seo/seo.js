import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const Seo = ({ siteName, title, description, pathname, children }) => {
    const { siteName: defaultSiteName, title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
  
    const Seo = {
        siteName: siteName || defaultSiteName,
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

  return (
    <>
        <title>{Seo.siteName} - {Seo.title}</title>
        <meta name="description" content={Seo.description} />
        {children}
    </>
  )
}
export default Seo;