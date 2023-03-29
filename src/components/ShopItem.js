/*import React from "react"
import { useContext } from "react";
import { ShopContext } from "../context/shop-context"

const {addToCart} = useContext(ShopContext)

function ShopItem({ id,image, name, price }) {
  return (
    <div className="shopItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>add to cart</button>
    </div>
  );
}

export default ShopItem */

import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { id, name, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};