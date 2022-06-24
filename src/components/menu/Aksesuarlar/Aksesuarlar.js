import React from "react";
import './Aksesuarlar.css'
import axios from "axios";
import { useEffect ,useState } from "react";

const Aksesuarlar = () => {
  const [accessory, setAccessory] = useState([]);
  useEffect(() => {
    axios({
      url: " https://localhost:44361/Products"
    })
      .then(response => {
        setAccessory(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    
  }, [setAccessory]);
  return (
    <div>
      <div className="aksesuarlarNavbar">
        <p className="aksesuaryazii">Aksesuarlar</p>
      </div>
      <div className="cards container">
      {accessory.filter(x=>x.categoryName=="Peripherals").map(item =>(
          
          <div className="aksesuarcard">
          <img
            className="card-img"
            src="https://n11scdn.akamaized.net/a1/640/spor-outdoor/outdoor-termoslar/starbucks-klasik-seri-termos-yesil-siyah-renkli-473-ml__1237404665799716.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>{item.productName}</b>
            </h5>
            <p className="card-text">{item.description}</p>
            <h5 className="price">
              <b>{item.price} TL</b>
            </h5>
            <button className="btn">Sepete Ekle</button>
          </div>
        </div>
       
          
         ))}


        
      </div>
    </div>
  );
};

export default Aksesuarlar;
