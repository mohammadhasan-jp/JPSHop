import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductGroup from "./components/ProductGroup";
import WhyUs from "./components/WhyUs";
import DiscountProducts from "./components/DiscountProducts";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import MostSaleProduct from "./components/MostSaleProduct";
import DiscountProducts2 from "./components/DiscountProduct2";
import Footer from "./components/Footer";
import ProductPage from "./Pages/ProductPage.jsx";
import Category from "./Pages/Category.jsx";
import AdsBanner from "./components/AdsBanner.jsx";
import SuggetProducts from "./components/SuggestProducts.jsx";
import FullSetupProducts from "./components/FullSetupProducts.jsx";
import NavbarMobile from "./components/NavbarMobile.jsx";
import Home from "./Pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
function App() {
  return (
    <>
     
        
          
        <Router>
          <ScrollToTop/>
        <div className="  w-full sticky top-0  shadow-lg  rounded-md   z-40">
          <section className="header   bg-white  lg:px-10  p-4 m-auto   ">
            <Header className="" />
          </section>
        </div>
        <div className="bg_body px-1 container box-border">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route
                path="/products/ProductPage"
                element={
                  <div className="container ">
                    <ProductPage />
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
          <Footer />
        </Router>
      
          <NavbarMobile />
     
  
    </>
  );
}

export default App;
