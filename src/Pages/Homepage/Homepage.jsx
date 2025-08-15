import React from 'react'
import Hero from '../../Components/Hero/Hero'
import ProductList from '../../Components/ProductList/ProductList'



const Homepage = () => {
  return (
    
    <div>
      <Hero />
      <h2 
  style={{
    fontSize: '2rem',
    marginBottom: '20px',
     marginTop: '40px',
    fontWeight: 'bold',
    textAlign: 'center'
  }}
>
  Our Elegant Collection
</h2>

      <ProductList />
      
    </div>
  )
}

export default Homepage
