import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart,AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <img
        className="starbucksLogo"
        src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
        onClick={() => {
          navigate("/");
        }}
      ></img>
      <Link className="menu" to={"/menu"}> Menü</Link>
      <input
        className="arama"
        placeholder="Aradığınız ürünü yazınız.."
      ></input>
      <button className="searchButton">
        <FaSearch />
      </button>
      <Link to={"/giris-yap"} className="giris">
      <AiOutlineUser className="user" />
      <div href="">
        Giriş yap
      </div>
      </Link>
      <a className="kayıt" href="">
        Kayıt ol
      </a>
      <Link to={'/sepet'} className="Shoppingcart">
        <AiOutlineShoppingCart />
      </Link>
    </div>
  );
};

export default Header;
