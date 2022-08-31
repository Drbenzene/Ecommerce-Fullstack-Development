import React from "react";
import Products from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <h1>The Home</h1>
      <Header />
      <Products />
      <div style={{bottom: '0', minHeight: "100%"}}>
      <Footer />
      </div>

    </div>
  );
}

export default Home;
