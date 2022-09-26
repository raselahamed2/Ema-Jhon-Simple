import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <div className='ratings-seller'>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='add'>Add to cart 
                <FontAwesomeIcon className='icon' icon={faCartPlus}></FontAwesomeIcon>
                </p>
                </button>
        </div>
    );
};

export default Product;