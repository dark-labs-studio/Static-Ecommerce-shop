import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { CartProvider } from "use-cart"
import ItemCMS from "./store/ItemCMS";
import Cart from "./store/Cart";
import Header from './header'
import './layout.css'
import stripeLogo from '../images/powered_by_stripe.svg'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        contentfulSiteInfo {
    websiteName
    websiteUrl
    fontColor
    backgroundColor
    homePageImage {
      fluid(maxWidth: 800, maxHeight: 800) {
              ...GatsbyContentfulFluid_noBase64
      }
    }
  }

      }
    `}
    render={data => (
      <div
        style={{
          minHeight: '100vh',
          margin: `0 auto`,
          paddingTop: 0,
          background: `${data.contentfulSiteInfo.backgroundColor}`,
          color: `${data.contentfulSiteInfo.fontColor}`
        }}
      >
        <Header siteTitle={data.contentfulSiteInfo.websiteName} />
        {children}
        <footer>
          <div className={'footer--wrapper'}>
            <a className={'footer--text'}>{data.contentfulSiteInfo.websiteName}</a>{' '}
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
