import { useState } from "react"
import React from 'react'
import products from "../Product.js"
import { display } from "@splidejs/splide/src/js/utils"


function Products() {

    let [myproducts,setProducts]=useState(products)
    let [newProduct,setNewProduct]=useState("")
    let [showText,setShowText]=useState(false)
    let [searchItem, setSearchItem]=useState("")



    function handleSubmit(e) {
        e.preventDefault()
        let newProducts={
            id:myproducts.length+1,
            name:newProduct
        }
        setProducts([...myproducts,newProducts])
    }


    function handleDelete(id) {
        let filteredProduct=myproducts.filter(product=>product.id!==id)
        setProducts(filteredProduct)
    }
   
    function handleReset() {
        setProducts([])
    }

    function showTitle() {      
            setShowText(!showText);
    }

    function sortPrice() {
        let lowPrice=myproducts.sort((a,b)=>a.price-b.price)
        setProducts([...lowPrice])
        console.log(lowPrice)
    }

    // function searchProducts() {
    //     let findedProducs=myproducts.filter(product=>{
    //         product.name.toLowerCase().includes(searchItem.toLowerCase)
    //     })
    // }

  return (
    <>
    <div>
    {/* <input onChange={(e)=>searchProducts(e.target.value)} value={searchItem} type="search" name="" id="" /> */}

        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text"  onChange={(e)=>setNewProduct(e.target.value)} placeholder='product' />
            <button>Add</button>
        </form>

        <ul>    
            {
               myproducts.map((product)=>(
                <li key={product?.id}> {product?.name} {product?.price}$ <button onClick={()=> handleDelete(product.id)}> Delete </button></li>
                
               )) 
            }
        </ul>
        <button onClick={()=>handleReset()}>Reset</button>

        <button onClick={showTitle}>
            {showText ? 'Hide' : 'Show'}
        </button>

      <p style={{ display: showText ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet.
      </p>

        
        <button onClick={sortPrice}>Ucuzdan bahaya</button>
 




    </div>
    </>
  )
}

export default Products