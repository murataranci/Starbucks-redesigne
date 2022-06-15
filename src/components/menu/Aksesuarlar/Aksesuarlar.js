import React from "react";
import './Aksesuarlar.css'

const Aksesuarlar = () => {
  return (
    <div>
      <div className="aksesuarlarNavbar">
        <p className="aksesuaryazii">Aksesuarlar</p>
      </div>
      <div className="cards container">
        <div className="aksesuarcard">
          <img
            className="card-img container"
            src="https://productimages.hepsiburada.net/s/49/375/10985884024882.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Termos</b>
            </h5>
            <p className="card-text">Yeşil - Siyah Renkli 473 ml</p>
            <h5 className="price">
              <b> 699 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
        <div className="aksesuarcard">
          <img
            className="card-img container"
            src="https://productimages.hepsiburada.net/s/49/375/10985883533362.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Termos</b>
            </h5>
            <p className="card-text">Yeşil - Siyah Renkli 473 ml</p>
            <h5 className="price">
              <b> 599 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
        <div className="aksesuarcard">
          <img
            className="card-img container"
            src="https://productimages.hepsiburada.net/s/192/550/110000160064167.jpg/format:webp"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Termos</b>
            </h5>
            <p className="card-text"> Koyu Mavi Renkli  473 ml</p>
            <h5 className="price">
              <b> 599 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aksesuarlar;
