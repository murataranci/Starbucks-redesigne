import React from "react";
import "./Kahveler.css";
import axios from "axios";
import {useEffect, useState} from 'react'

const Kahveler = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    axios({
      url: " https://localhost:44361/Products"
    })
      .then(response => {
        setCoffee(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    
  }, [setCoffee]);
  
  
  return (
    <div >
      <div className="kahveNavbar">
        <p className="kahveyazii">Kahveler</p>
      </div>
      

      <div className="cards container ">
         {coffee.filter(x=>x.categoryName=="Coffee Beans").map(item =>(
          
          
          <div className="kahvecard">
          <img
            className="card-img-top"
            src="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/3272020/3272020-79794c-1650x1650.jpg"
            alt="Card image cap"/>
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

export default Kahveler;
