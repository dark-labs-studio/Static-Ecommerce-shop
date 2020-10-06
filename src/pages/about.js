import React from 'react'
import SEO from '../components/seo'
import { useStaticQuery } from "gatsby"
// import PageBody from '../components/pageBody'

function SocialsPage() {
    // const products = data.allContentfulProducts.edges

    const data = useStaticQuery(graphql`
    query socialsQuiery {
    contentfulSiteInfo {
        websiteName
        instagramName
        instagramProfileUrl
    }
    }`
    )

    return (
        <div>
            <SEO
                title={`About`}
                description={`About ${data.contentfulSiteInfo.websiteName}`}
            />
            <div className={'socials-page--wrapper'}>
                <div className={'socials-item--container'}>
                </div>
                <a href={data.contentfulSiteInfo.instagramProfileUrl}>{data.contentfulSiteInfo.instagramName}</a>
                {/* <PageBody body={data.contentfulAbout} /> */}
            </div>
        </div>
    )
}
export default SocialsPage
