import React from "react";
import Banner from "../components/Banner";
import ProductGroup from "../components/ProductGroup";
import MostSaleProduct from "../components/MostSaleProduct";
import DiscountProducts2 from "../components/DiscountProduct2";
import SuggetProducts from "../components/SuggestProducts.jsx";
import FullSetupProducts from "../components/FullSetupProducts.jsx";
import AdsBanner from "../components/AdsBanner.jsx";
function Home() {
  return (
    <div>
      <section className="banner  ">
        <Banner />
      </section>
      <section className="product-group  ">
        <ProductGroup />
      </section>
      <section className="mostSaleProduct ">
        <MostSaleProduct />
      </section>
      <section className="adsBanner">
        <AdsBanner />
      </section>
      <section className="suggetProducts ">
        <SuggetProducts />
      </section>
      <section className="DiscountProducts2 ">
        <DiscountProducts2 />
      </section>
      <section className="fullSetUp">
        <FullSetupProducts />
      </section>
    </div>
  );
}

export default Home;
