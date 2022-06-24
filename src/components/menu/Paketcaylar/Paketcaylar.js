import React from "react";
import './Paketcaylar.css'
import axios from "axios";
import { useEffect ,useState } from "react";

const Paketcaylar = () => {
  const [tea, setTea] = useState([]);
  useEffect(() => {
    axios({
      url: " https://localhost:44361/Products"
    })
      .then(response => {
        setTea(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    
  }, [setTea]);
  return (
    <div>
      <div className="paketcayNavbar">
        <p className="paketcayyazi">Paket Çaylar</p>
      </div>
      <div className="cards container">
      {tea.filter(x=>x.categoryName=="Tea Box").map(item =>(
           <div className="caycard ">
           <img
             className="card-img-top container"
             src="https://m.media-amazon.com/images/I/71VSlEHPN-L._SL1500_.jpg"
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

export default Paketcaylar;


