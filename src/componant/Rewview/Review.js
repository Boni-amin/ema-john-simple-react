import React from 'react';
import { useHistory } from 'react-router';
import useProducts from '../../hooks/UseProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import ProductReview from '../ProductReview/ProductReview';
import UseCard from '../UseCard/UseCard';

const Review = () => {
    const [products] = useProducts()
    const [card, setCard] = UseCard(products)
    const history =useHistory()
    const handleRemove = key =>{
        const newCard = card.filter(product => product.key !== key)
        setCard(newCard)
        removeFromDb(key)
    } 

    const handlePlaceOrder = ()=>{
        history.push('/placeOrder')
        setCard([]);
        clearTheCart()
    }

    return (
        <div className='shop-contianer'>
            <div className="product-container">
                {
                    card.map(product=> <ProductReview
                        key = {product.key}
                        handleRemove ={handleRemove}
                        product={product}></ProductReview>)
                }
            </div>
            <div className="card-container">
                <Card card={card}>
                    <button onClick={handlePlaceOrder} className="add-card">Order palace</button>
                </Card>
            </div>
        </div>
    );
};

export default Review;