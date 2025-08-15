import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import './cart.css';

const CartDetails = ({item}) => {
    console.log('CartDetails item:', item);
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(ShopContext)

  const { id, title, image, price, amount } = item

  return (
    <div className="cart-item">
      {/* Product Details */}
      <div className="product-details">
        <img src={image} alt="" />
        <div className="product_info">
          <h3>{title}</h3>
          <div
            className="cart_item_remove"
            onClick={() => removeFromCart(id)}
            title="Remove Item"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>

      {/* Quantity */}
      <div className="quantity">
        <button onClick={() => decreaseQuantity(id)}>
          <IoMdRemove />
        </button>
        <span>{amount}</span>
        <button onClick={() => increaseQuantity(id)}>
          <IoMdAdd />
        </button>
      </div>

      {/* Price */}
      <div className="price">
        ${price}
      </div>

      {/* Total */}
      <div className="total">
        ${parseFloat((price * amount).toFixed(2))}
      </div>
    </div>
  );
};

export default CartDetails;
