import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

export const structuredData = (vars) => {
  const {siteName} = vars;
  const schema = {
    
  }
  return JSON.stringify(schema);
}

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
        <link rel="canonical" href={Seo.url} data-baseprotocol="https:" data-
basehost={siteUrl}></link>
        {children}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Store",
            "image": [
              "${siteUrl}/seo/dearbornfamilyfarm_1x1.jpg",
              "${siteUrl}/seo/dearbornfamilyfarm_4x3.jpg",
              "${siteUrl}/seo/dearbornfamilyfarm_16x9.jpg"
            ],
            "name": ${Seo.siteName},
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1208 S. Machias",
              "addressLocality": "WA",
              "addressRegion": "WA",
              "postalCode": "98290",
              "addressCountry": "US"
            }
          }
        `}</script>
    </>
  )
}
export default Seo;