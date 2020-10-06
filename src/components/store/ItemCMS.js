import React from "react";
import { useCart } from "use-cart";
import "./product.css"

const ItemCMS = (props) => {
    const { addItem } = useCart();
    return (
        <div className='addToCart-button--container'>
            {props.itemSKU1 !== 'N/A' && <button className='addToCart--button'
                onClick={() => addItem(props.itemSKU1)}>
                {props.itemNameSKU1}
            </button>
            }
            {props.itemSKU2 !== 'N/A' && <button className='addToCart--button'
                onClick={() => addItem(props.itemSKU2)}>
                {props.itemNameSKU2}
            </button>
            }
            {props.itemSKU3 !== 'N/A' && <button className='addToCart--button'
                onClick={() => addItem(props.itemSKU3)}>
                {props.itemNameSKU3}
            </button>
            }
            {props.itemSKU4 !== 'N/A' && <button className='addToCart--button'
                onClick={() => addItem(props.itemSKU4)}>
                {props.itemNameSKU4}
            </button>
            }
            {props.itemSKU5 !== 'N/A' && <button className='addToCart--button'
                onClick={() => addItem(props.itemSKU5)}>
                {props.itemNameSKU5}
            </button>
            }
        </div>
    );
};
export default ItemCMS;