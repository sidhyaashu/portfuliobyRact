import css from './Products.module.scss'
import { ProductData } from '../../products'
import { useState } from 'react'

const Products = () => {
  const[menuProducts,setMenuProducts]=useState(ProductData);
  const filter=(type)=>{setMenuProducts(ProductData.filter((product)=>product.type === type))}
  return (
    <div className={css.products_container}>
      <h2>Our Featured Products</h2>
      <div className={css.Product_container}>
        <ul>
            <li onClick={()=>setMenuProducts(ProductData)}>All</li>
            <li onClick={()=>filter("skin care")}>Skin care</li>
            <li onClick={()=>filter("condtioner")}>Conditioners</li>
            <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>
        <div className={css.list}>
            {
              menuProducts.map((product)=>{
                return <div className={css.product}>
                 <span>{product.name}</span>
                </div>
              })
            }
        </div>
      </div>
    </div>
  )
}

export default Products
