import React from "react";
import logo from "../../assets/img/logo.png";
import Mainbanner from '../../assets/img/background-main.png';


const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
        
      </header>
      <section className="logo">
        <img src={logo} alt="" />
      </section>
      <section className="text">
       
      </section>
      </>
  );
};

export default Header;