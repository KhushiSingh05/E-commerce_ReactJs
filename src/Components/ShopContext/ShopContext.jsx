import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

import { productsData } from '../../assets/data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData)
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if (isNaN(priceAsNumber)){ 
        return accumulator
      }
      return accumulator + priceAsNumber * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
    if(cart) {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    },0)
    setQuantity(amount)
  }
  }, [cart])

  const addToCart = (productOrId, id) => {
  // Find the product if only id is passed
  let product = productOrId;
  if (!product || !product.id) {
    product = products.find((p) => p.id === id);
  }
  if (!product) return;

  const newItem = { ...product, amount: 1 };

  const cartItem = cart.find((item) => item.id === newItem.id);

  if (cartItem) {
    const newCart = cart.map((item) => {
      if (item.id === newItem.id) {
        return { ...item, amount: cartItem.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  } else {
    setCart([...cart, newItem]);
    toast.success("Product added to cart");
  }
};

  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
    toast.success("Product removed from cart");
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  const decreaseQuantity = (id) => {
  const cartItem = cart.find((item) => {
    return item.id === id;
  })
  if (cartItem) {
    const newCart = cart.map((item) => {
      if(item.id === id){
        return{...item, amount:cartItem.amount-1}
      }else{
        return item
      }
    })
    setCart(newCart)
  }
  else{ 
    if(cartItem.amount < 1) {
    removeFromCart(id);
    } 
  }
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        quantity,
        total
      }}>
    
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;