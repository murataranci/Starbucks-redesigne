import React from "react";
import './Paketcaylar.css'

const Paketcaylar = () => {
  return (
    <div>
      <div className="paketcayNavbar">
        <p className="paketcayyazi">Paket Çaylar</p>
      </div>
      <div className="cards container">
        <div className="caycard">
          <img
            className="card-img-top container"
            src="https://productimages.hepsiburada.net/s/35/550/10495250104370.jpg/format:webp"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Teavana Hibiscus</b>
            </h5>
            <p className="card-text">Aromalı Bitki Çayı 12'li Poşet Çay</p>
            <h5 className="price">
              <b>59.99 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
        <div className="caycard">
          <img
            className="card-img-top container"
            src="https://productimages.hepsiburada.net/s/35/375/10495250038834.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Teavana YouthBerry</b>
            </h5>
            <p className="card-text">Aromalı Bitki Çayı 12'li Poşet Çay</p>
            <h5 className="price">
              <b>59.99 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
        <div className="caycard">
          <img
            className="card-img-top container"
            src="https://assets.mystarbucks.com.au/imagecache/bestfit/270x330/_files/sbx20160502-64916-pr.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Starbucks Emperor's Green Tea</b>
            </h5>
            <p className="card-text">Aromalı Bitki Çayı 12'li Poşet Çay</p>
            <h5 className="price">
              <b>59.99 TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paketcaylar;
