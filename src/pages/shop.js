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

function Shop() {
    // const products = data.allContentfulProducts.edges

    const data = useStaticQuery(graphql`
query HeaderQuery {
  site {
    siteMetadata {
      title
    }
  }
  contentfulSiteInfo {
    websiteName
    websiteUrl
    homePageImage {
      fluid(maxWidth: 800, maxHeight: 800) {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
  allStripeSku {
    edges {
      node {
        inventory {
          quantity
          type
          value
        }
      }
    }
  }
  allContentfulProducts {
    nodes {
      id
      title
      price
      skuVariant1
      skuVariant1Name
      skuVariant1
      skuVariant2Name
      skuVariant2
      skuVariant3Name
      skuVariant3
      skuVariant4Name
      skuVariant4
      skuVariant5Name
      skuVariant5
      description {
        internal {
          content
        }
      }
      imageCarousel {
        fluid(maxWidth: 800, maxHeight: 800) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
}
`);

    const products = data.allContentfulProducts.nodes
    const siteInfo = data.contentfulSiteInfo

    return (
        <div className={'home--wrapper'} >
            <SEO title={data.site.siteMetadata.title} />
            <div className={'product-home--container'}>
                <CartProvider>
                    <div>
                        {products.map(({ id, title, price, description, heroImage, imageCarousel, skuVariant1, skuVariant1Name, skuVariant2, skuVariant2Name, skuVariant3, skuVariant3Name, skuVariant4, skuVariant4Name, skuVariant5, skuVariant5Name }) => (
                            <div className={'product-container--item'} key={id}>
                                <div className={'product-image--container'}>
                                    <div className={'product-image--carousel'}>
                                        <AwesomeSlider
                                            organicArrows={false}
                                            bullets={false}
                                        >
                                            <div>
                                                <Img
                                                    className="product-item--image"
                                                    height={'500px'}
                                                    fluid={imageCarousel[0].fluid}
                                                    backgroundColor={'#eeeeee'}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Img
                                                    className="product-item--image"
                                                    height={'500px'}
                                                    fluid={imageCarousel[1].fluid}
                                                    backgroundColor={'#eeeeee'}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <Img
                                                    className="product-item--image"
                                                    height={'500px'}
                                                    fluid={imageCarousel[2].fluid}
                                                    backgroundColor={'#eeeeee'}
                                                    alt=""
                                                />
                                            </div>
                                            {/* <div>
                                                <Img
                                                    className="product-item--image"
                                                    height={'500px'}
                                                    fluid={imageCarousel[3].fluid}
                                                    backgroundColor={'#eeeeee'}
                                                    alt=""
                                                />
                                            </div> */}
                                        </AwesomeSlider>
                                    </div>
                                    <div>
                                    </div>
                                    <div className={'product-item--info'}>
                                        <h1 className={'product-item--title'}> {title}</h1>
                                        <div className={'product-item--description'} >{description.internal.content}</div>
                                        <h2 className={'product-item--price'} >${price}</h2>
                                    </div>
                                    <div className={'addToCart--container'}>
                                        <div className='addToCart-button--container'>
                                            <ItemCMS
                                                itemSKU1={skuVariant1}
                                                itemNameSKU1={skuVariant1Name}
                                                itemSKU2={skuVariant2}
                                                itemNameSKU2={skuVariant2Name}
                                                itemSKU2={skuVariant2}
                                                itemNameSKU2={skuVariant2Name}
                                                itemSKU3={skuVariant3}
                                                itemNameSKU3={skuVariant3Name}
                                                itemSKU4={skuVariant4}
                                                itemNameSKU4={skuVariant4Name}
                                                itemSKU5={skuVariant5}
                                                itemNameSKU5={skuVariant5Name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Cart />
                </CartProvider>
            </div>
        </div >
    )
}
export default Shop