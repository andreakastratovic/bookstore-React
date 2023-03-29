/*import React from 'react'
import { ShopList } from '../additional/ShopList'
import {ShopItem} from '../components/ShopItem';
import '../styles/shop.css'

function Shop() {
  return (
    <div className="shop">
        <h1 className="shopTitle">Explore the shop</h1>
        <div className="shopList">
        {ShopList.map((shopItem, key) => {
          return (
            <ShopItem
              key={key}
              image={shopItem.image}
              name={shopItem.name}
              price={shopItem.price}
            />
          );
        })}
        </div>
    </div>
  )
}

export default Shop*/

import React from "react"
import { PRODUCTS } from '../additional/ShopList'
import { Product } from '../components/ShopItem'
import "../styles/shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Explore the shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};