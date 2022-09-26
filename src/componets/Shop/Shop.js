import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import {addToDb, getStoredCart} from '../../utilities/fakedb'
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        
    }, [])

    useEffect(() =>{
        const storedCart = getStoredCart();
        const savecart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                addedProduct.quantity = quantity;
                savecart.push(addedProduct);
            }
        }
        setCart(savecart);
    }, [products])
    
    const handleAddToCart = (product) =>{
        let newCart = []
        const exists = cart.find(selectProduct => selectProduct.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart , product]
        }
        else{
            const rest = cart.filter(selectProduct => selectProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key ={product.id}
                        product ={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;