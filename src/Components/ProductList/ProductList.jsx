import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import './ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map(({ id, image, title, price }) => (
          <div className="product-card" key={id}>
            <Link to={`/product/${id}`}>
              <img src={image} alt={title} className="product-image" />
              <div className="product-info">
                <h4>{title}</h4>
                <p>${price}</p>
              </div>
            </Link>
            <button
              className="add-to-cart"
              onClick={() => addToCart(products,id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
