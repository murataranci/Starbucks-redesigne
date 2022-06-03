import React from "react";
import "./Sepet.css";
import { FaTrashAlt } from "react-icons/fa";

const Sepet = () => {
  const createOptions = () => {
    let options = [];
    for (let i = 1; i <= 20; i++) options.push(<option>{i}</option>);
    return options;
  };
  return (
    <div className="sepet-container container-fluid">
      <div className="sepet-card col-8">
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://myderya.com/wp-content/uploads/2021/03/moccha-1024x1024.jpg"
          ></img>
          <div className="ms-3">
            <h4>Caramel Frappucino</h4>
            <h6>Nefis bir yaz içeceği</h6>
          </div>
          <form className="ms-3 mt-1">
            <select className="urunadet">{createOptions()}</select>
          </form>
        </div>
        <div className="urunfiyat">
          <FaTrashAlt className="ms-4"/>
          <h5 className="mt-3">39.99</h5>
          <h6 className="mt-1 text-decoration-line-through text-secondary" >55.99</h6>
        </div>
      </div>
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://myderya.com/wp-content/uploads/2021/03/moccha-1024x1024.jpg"
          ></img>
          <div className="ms-3">
            <h4>Caramel Frappucino</h4>
            <h6>Nefis bir yaz içeceği</h6>
          </div>
          <form className=" ms-3 mt-1">
            <select className="urunadet">{createOptions()}</select>
          </form>
        </div>
        <div className="urunfiyat">
          <FaTrashAlt className="ms-4"/>
          <h5 className="mt-3">39.99</h5>
          <h6 className="mt-1 text-decoration-line-through text-secondary" >55.99</h6>
        </div>
      </div>
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://myderya.com/wp-content/uploads/2021/03/moccha-1024x1024.jpg"
          ></img>
          <div className="ms-3">
            <h4>Caramel Frappucino</h4>
            <h6>Nefis bir yaz içeceği</h6>
          </div>
          <form className=" ms-3 mt-1">
            <select className="urunadet">{createOptions()}</select>
          </form>
        </div>
        <div className="urunfiyat">
          <FaTrashAlt className="ms-4"/>
          <h5 className="mt-3">39.99</h5>
          <h6 className="mt-1 text-decoration-line-through text-secondary" >55.99</h6>
        </div>
      </div>
      
      </div>
      
      <div className="satinal col-4 ">
        <h4>Sipariş Özeti</h4>
        <div className="sepettutari">
        <p>Sepet Tutarı</p>
        <p>39.99</p>
        </div>
        <div className="kargoucreti">
          <p>Kargo Ücreti</p>
          <p>14.99</p>
        </div>
        <div className="toplamfiyat">
          <b>Toplam</b>
          <b>55.98</b>
        </div>
        <button className="satınalbuton"><b>Satın Al</b></button>
      </div>
    </div>
  );
};

export default Sepet;
