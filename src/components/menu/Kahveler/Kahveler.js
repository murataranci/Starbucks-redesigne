import React from "react";
import "./Kahveler.css";

const Kahveler = () => {
  return (
    <div>
      <div className="kahveNavbar">
        <p className="kahveyazii">Kahveler</p>
      </div>
      <div className="cards container">
        <div className="kahvecard">
          <img
            className="card-img-top container"
            src="https://izmirgida.net/wp-content/uploads/2021/04/5730800623059.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title"><b>Tripleshot Espresso</b></h5>
            <p className="card-text">Sütlü Kahve İçecek 300Ml</p>
            <h5 className="price"><b>39.99 TL</b></h5>
            <button className="btn">Sepete Ekle</button>
          </div>
          
        </div>
        <div className="kahvecard">
          <img
            className="card-img-top container"
            src="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08028236/08028236-a6a697-1650x1650.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title"><b>Tripleshot Espresso</b></h5>
            <p className="card-text">Şekersiz Sütlü Kahve 300Ml</p>
            <h5 className="price"><b>39.99 TL</b></h5>
            <button className="btn">Sepete Ekle</button>
          </div>
          
        </div>
        <div className="kahvecard">
          <img
            className="card-img-top container"
            src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw8da87e4f/products/L8696353/large/L8696353.JPG"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title"><b>Caramel Frappucino</b></h5>
            <p className="card-text">Nefis bir yaz içeceği 300Ml</p>
            <h5 className="price"><b>39.99 TL</b></h5>
            <button className="btn">Sepete Ekle</button>
          </div>
          
        </div>
        
       
      </div>
    </div>
  );
};

export default Kahveler;
