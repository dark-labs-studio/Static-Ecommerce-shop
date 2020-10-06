import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { CartProvider } from "use-cart"
import Cart from "../components/store/Cart";
import SEO from '../components/seo'
import ItemCMS from '../components/store/ItemCMS';
import imageTee from '../components/assets/shirtStockImg.jpg'
import HomeHero from '../components/homeHero';
import Product from '../components/store/product'
import Header from '../components/header';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Item from "../components/store/Item";
import '../components/store/product.css'

function Index() {
  // const products = data.allContentfulProducts.edges

  const data = useStaticQuery(graphql`
    query HomeQuery {
  site {
    siteMetadata {
      title
    }
  }
  contentfulSiteInfo {
    websiteName
    websiteUrl
    homePageImage {
      fluid{
              ...GatsbyContentfulFluid_noBase64
      }
    }
  }
}`);

  const siteInfo = data.contentfulSiteInfo

  return (
    <div className={'home--wrapper'} >
      <SEO title={data.site.siteMetadata.title} />
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <div className={'home--container'}>
        <Img
          className="product-item--image"
          height={'500px'}
          fluid={siteInfo.homePageImage.fluid}
          backgroundColor={'#eeeeee'}
          alt=""
        />
      </div>
    </div >
  )
}
export default Index