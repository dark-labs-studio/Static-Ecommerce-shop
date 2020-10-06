import React, { useState } from 'react'
import Item from "../store/Item";
import data from "../store/Data";
import "./product.css"

function Product(props) {
    return (
        <div className={'product-item--wrapper'}>
            <img
                src={props.imgHero}
                alt={props.imgAlt}
                className={'product-item--image'}
            />
            <div className={'product-item--info'}>
                <h1 className={'product-item--title'} >{props.name}</h1>
                <h2 className={'product-item--price'} >{props.price}</h2>
                <div className={'addToCart--container'}>
                    {data.map(d => (
                        <Item
                            key={d.sku}
                            name={d.name}
                            price={d.price}
                            sku={d.sku} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Product;