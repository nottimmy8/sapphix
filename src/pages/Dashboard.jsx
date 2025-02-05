import React from "react";
import Hero from "../components/Hero";
import Topselect from "../components/Topselect";
import PromoCards from "../components/PromoCards";
import Accessorise from "../components/Accessorise";
import Sapphixstyle from "../components/sapphixstyle";

const Dashboard = () => {
  return (
    <div className=" relative top-[81px] ">
      <Hero />
      <Topselect />
      <PromoCards />
      <Accessorise />
      <Sapphixstyle />
    </div>
  );
};

export default Dashboard;
