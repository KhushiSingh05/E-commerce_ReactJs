import React from 'react';
import ProductList from '../../Components/ProductList/ProductList'


const Products = () => {
  //const { products, addToCart } = useContext(ShopContext);

  return (
    <div>
         <h2 
  style={{
    fontSize: '2rem',
    marginBottom: '20px',
     marginTop: '40px',
    fontWeight: 'bold',
    textAlign: 'center',
    backGroundColor:'Red'
  }}
>
  Our New Launch!
</h2>  
       <ProductList />

    </div>
  )
}

export default Products;
