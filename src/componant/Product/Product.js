import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.handleAddToCard)
    // const element = <FontAwesomeIcon icon={faShoppingCart} />
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="img" />
            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <p>by {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <p><Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly
                ></Rating> </p>
                <button onClick={()=>props.handleAddToCard(props.product)} className='add-card'>{<FontAwesomeIcon icon={faShoppingCart} />} add to card</button>
            </div>
        </div>
    );
};

export default Product;