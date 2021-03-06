import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    const [card, setCard] = useState([])
    const [displayProducts, setDisplayProducts ] = useState([])

    useEffect(()=> {
        fetch('./products.JSON')
        .then(res =>res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)

        })

    } ,[]);

    useEffect(()=>{
        if(products.length){
            const saveCard = getStoredCart()
            const storeCard = [] 
            for(const key in saveCard){
            const addedProduct = products.find(product => product.key === key)
                if(addedProduct){
                    const quantity = saveCard[key]
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct)
                    storeCard.push(addedProduct)
                }
                
            }
            setCard(storeCard)
        }
    } ,[products])

    const handleAddToCard = (product) =>{
       const exists = card.find(pd => pd.key === product.key)
        let newCard = []
       if(exists){
            const remainng = card.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1 ;
            newCard = [...remainng, exists]
       }
       else{
            product.quantity = 1;
            newCard = [...card, product]

       }
        setCard(newCard)
        addToDb(product.key)
    }
    const handleEsrch = event => {
        const searchText  = event.target.value;
        const matchProduct = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()))
        // console.log(matchProduct.length)
        setDisplayProducts(matchProduct)
    }


    return (
        <>
            <div className="search-container">
                <input 
                    onChange= {handleEsrch}
                    type="text" 
                    placeholder="search product" 
                    />
            </div>
            <div className='shop-contianer'>
            <div className="product-container">
                {
                    displayProducts.map(product=> <Product 
                        key={product.key}
                         product={product}
                         handleAddToCard={handleAddToCard}
                        >
                    </Product>)
                }
            </div>
            <div className="card-container">
                <Card card={card}>
                    <Link to="/review">
                        <button className ="add-card">Buy Now</button>
                    </Link>
                </Card>
            </div>
        </div>
        </>
    );
};

export default Shop;