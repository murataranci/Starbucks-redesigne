import React from "react";
import "./Sepet.css";
import { FaTrashAlt } from "react-icons/fa";

const Sepet = () => {
  const createOptions = () => {
    let options = [];
    for (let i = 1; i <= 10; i++) options.push(<option>{i}</option>);
    return options;
  };
  return (
    <div className="sepet-container container">
      <div className="sepet-card col-8">
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw8da87e4f/products/L8696353/large/L8696353.JPG"
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
          <h6 className="mt-3 text-decoration-line-through text-secondary" >55.99 TL</h6>
          <h5 className="mt-1">39.99TL</h5>
        </div>
      </div>
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw8da87e4f/products/L8696353/large/L8696353.JPG"
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
          <h6 className="mt-3 text-decoration-line-through text-secondary" >55.99 TL</h6>
          <h5 className="mt-1">39.99TL</h5>
        </div>
      </div>
      <div className="urun">
        <div className="urundetay">
          <img
            className="urunresim"
            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw8da87e4f/products/L8696353/large/L8696353.JPG"
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
          <h6 className="mt-3 text-decoration-line-through text-secondary" >55.99 TL</h6>
          <h5 className="mt-1">39.99TL</h5>
        </div>
      </div>
      
      </div>
      
      <div className="satinal col-4 ">
        <h4>Sipariş Özeti</h4>
        <div className="sepettutari">
        <p>Sepet Tutarı</p>
        <p>119.97 TL</p>
        </div>
        <div className="kargoucreti">
          <p>Kargo Ücreti</p>
          <p>14.99 TL</p>
        </div>
        <div className="toplamfiyat">
          <b>Toplam</b>
          <b>135.96 TL</b>
        </div>
        <button className="satınalbuton"><b>Sepeti Onayla</b></button>
      </div>
    </div>
  );
};

export default Sepet;
