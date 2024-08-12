import React from "react";
import Header from "./Header";
import Mainsection from "./Mainsection";
import Footer from "./Footer";
import SecondSection from "./SecondSection";
const Home = () => {
  return (
    <div className="HomeBody">
      <Header></Header>
      <Mainsection></Mainsection>
      <SecondSection></SecondSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
