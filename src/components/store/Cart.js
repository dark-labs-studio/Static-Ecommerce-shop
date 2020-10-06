import React, { useState, useEffect, useRef } from "react";
import { useCart } from "use-cart";
import "./product.css"
import { a, useSpring, config } from "react-spring";
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

const Cart = () => {

    const data = useStaticQuery(graphql`
    query CartQuery {
      site {
    siteMetadata {
      title
    }
  }
  contentfulSiteInfo {
    websiteName
    websiteUrl
    accentColor
  }
  allContentfulProducts {
    nodes {
      id
      title
      price
      description{
        internal {
          content
        }
      }
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
      imageCarousel {
        fluid(maxWidth: 800, maxHeight: 800) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
}`
    );

    function CartLineItem(allProductData) {
        let array = []
        let i
        for (i = 0; i < allProductData.length; i++) {
            let skuTitle = allProductData[i].title
            let skuVar1 = allProductData[i].skuVariant1
            let skuVarName1 = allProductData[i].skuVariant1Name
            let skuVarPrice1 = allProductData[i].price

            let skuVar2 = allProductData[i].skuVariant2
            let skuVarName2 = allProductData[i].skuVariant2Name
            let skuVarPrice2 = allProductData[i].price

            let skuVar3 = allProductData[i].skuVariant3
            let skuVarName3 = allProductData[i].skuVariant3Name
            let skuVarPrice3 = allProductData[i].price

            let skuVar4 = allProductData[i].skuVariant4
            let skuVarName4 = allProductData[i].skuVariant4Name
            let skuVarPrice4 = allProductData[i].price

            let skuVar5 = allProductData[i].skuVariant5
            let skuVarName5 = allProductData[i].skuVariant5Name
            let skuVarPrice5 = allProductData[i].price

            array.push(
                { sku: skuVar1, name: skuTitle, variant: skuVarName1, price: skuVarPrice1 },
                { sku: skuVar2, name: skuTitle, variant: skuVarName2, price: skuVarPrice2 },
                { sku: skuVar3, name: skuTitle, variant: skuVarName3, price: skuVarPrice3 },
                { sku: skuVar4, name: skuTitle, variant: skuVarName4, price: skuVarPrice4 },
                { sku: skuVar5, name: skuTitle, variant: skuVarName5, price: skuVarPrice5 },
            )
        }

        return [...array]
    }

    const [rightMenuVisible, setRightMenuVisible] = useState(false);
    const [firstItemState, setFirstItemState] = useState(false)

    const rightMenuAnimation = useSpring({
        opacity: rightMenuVisible ? 1 : 0,
        transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
    });

    const {
        addItem,
        removeItem,
        removeLineItem,
        clearCart,
        items,
        lineItemsCount
    } = useCart();
    let stripe;

    useEffect(() => {
        stripe = window.Stripe("pk_live_qR8M7G88keFcqb00phdiy4QD00mLdcQN60", {
            betas: ["checkout_beta_4"]
        });
    });

    const redirectToCheckout = async () => {
        const { error } = await stripe.redirectToCheckout({
            items: items,

            // Note that it is not guaranteed your customers will be redirected to this
            // URL *100%* of the time, it's possible that they could e.g. close the
            // tab between form submission and the redirect.
            successUrl: `${data.contentfulSiteInfo.websiteUrl}`,
            cancelUrl: `${data.contentfulSiteInfo.websiteUrl}`,
            billingAddressCollection: 'required',
        });
    };

    const scrollDestinationRef = useRef();

    const [y, setY] = useSpring(() => ({
        immediate: false,
        config: config.slow,
        y: 0,
        onFrame: props => {
            window.scroll(0, props.y);
        }
    }));

    function adjustedProductData(itemList, itemInput, qty) {
        let i

        for (i = 0; i < itemList.length; i++) {
            if (itemList[i].sku === itemInput) {
                if (itemList[i].variant === 'BUY') {
                    { return itemList[i].name }
                }
                return (`$ ${(qty * itemList[i].price)} ${itemList[i].name} ${itemList[i].variant}`)
            }
        }
    }
    return (
        <div className={''}>
            <button
                className="checkout-top--button"
                onClick={() => setRightMenuVisible(!rightMenuVisible)}
            >
                {rightMenuVisible ? `x` : lineItemsCount >= 1 ? <strong style={{ color: `${data.contentfulSiteInfo.accentColor}` }}>{`Cart ${lineItemsCount}`}</strong> : <strong>{`Cart ${lineItemsCount}`}</strong>}
                {/* {lineItemsCount >= 1 ? <strong style={{ color: '#f43' }}>{`Cart ${lineItemsCount}`}</strong> : <strong>{`Cart ${lineItemsCount}`}</strong>} */}
            </button>

            <a.div style={rightMenuAnimation} className={'checkout-side--wrapper'}>
                <div className={'checkout-side--header'}>
                    <h5 className={'checkout-side--header-text'}> Cart: {lineItemsCount}</h5>
                </div>

                <div className={'cart--item-wrapper'}>
                    {items.map(item => (
                        <div className={'cart--item-container'} key={item.sku}>
                            <div className={'cart--item-list'}>
                                <div className={'cart--item-name'}>
                                    {/* {item.sku} */}
                                    {adjustedProductData((CartLineItem(data.allContentfulProducts.nodes)), item.sku, item.quantity)}
                                </div>
                            </div>
                            <div className={'cart-item--buttonContainer'}>
                                <button className={'cart-item--button'} onClick={() => removeItem(item.sku)}>-</button>
                                {item.quantity}
                                <button className={'cart-item--button'} onClick={() => addItem(item.sku)}>+</button>
                                <button className={'cart-item--button'} onClick={() => removeLineItem(item.sku)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={'cartCheckout__container'}>
                    <button className={'cartEmpty__btn'} onClick={clearCart}>Empty cart</button>
                    <button className={'cartCheckout__btn'} onClick={redirectToCheckout} style={{ color: `${data.contentfulSiteInfo.accentColor}` }}>Checkout</button>
                </div>
            </a.div>
        </div>
    );
};
export default Cart;
