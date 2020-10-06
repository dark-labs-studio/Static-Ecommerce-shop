import React from "react";
import { useCart } from "use-cart";
import "./product.css"

const Item = ({ name, price, sku }) => {
  const { addItem } = useCart();
  return (
    <div className='addToCart-button--container'>
      <button className='addToCart--button'
        onClick={() => addItem(sku)}>
        {sku == 'sku_GJrwVj2AVryV6A' && <span>{'S'}</span>}
        {sku == 'sku_GJrvTWZG5X2fmT' && <span>{'M'}</span>}
        {sku == 'sku_GJrrjwPCDsq0fx' && <span>{'L'}</span>}
      </button>
    </div>
  );
};
export default Item;