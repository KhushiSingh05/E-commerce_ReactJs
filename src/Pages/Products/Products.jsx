import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import "./Products.css";

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="productsHero">
  <div className="heroContent">
    <h1>Summer Collection 2026</h1>

    <p>
      Discover the latest fashion trends with premium quality and affordable
      prices.
    </p>

  </div>
</section>
<div className="featuredHeading">
    <h2>Featured Products</h2>
    <p>Find your perfect outfit</p>
</div>
<ProductList />
<section className="offerBanner">

    <h2>Up to 50% OFF</h2>
    <p>Limited Time Offer</p>

</section>
      <h2 className="launchHeading">
        Our New Launch
      </h2>

      <ProductList />
    </div>
  );
};

export default Products;