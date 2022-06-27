import React from 'react'
import Slider from 'react-slick'
import './Home.css'
import intro from './Video/Intro.mp4'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProductSlider = [{
  id: 1,
  title: "Frappuccino Caramel",
  linkImage:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08059617/08059617-5a4166-1650x1650.png"
},
{
  id: 2,
  title: "Doubleshot Espresso ",
  linkImage:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08089655/08089655-11ec07-1650x1650.png"
},
{
  id: 3,
  title: "Medium Pike Place",
  linkImage:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03242971/03242971-5782dd-1650x1650.jpg"
},
{
  id: 4,
  title: "Reserve Mücevher Serisi",
  linkImage:"https://productimages.hepsiburada.net/s/192/550/110000159964014.jpg/format:webp"
},
{
  id: 5,
  title: "Toffee Nut Latte ",
  linkImage:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03252562/03252562-c59872-1650x1650.jpg"
}]

const Home = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
     <div className='container'>
    { <video className='video' autoPlay loop muted >
      <source src={intro} type='video/mp4'></source>
    </video> }
           <div className='newProducts'>
            <img src='https://images.hepsiburada.net/assets/gif/hepsiburada/starbucks_110321/02.jpg'></img>
          </div>
          <div className='newProducts2 '>
            <img src='https://hips.hearstapps.com/del.h-cdn.co/assets/17/43/4000x2000/landscape-1508935651-starbucks-almond-milk-frappuccinos.jpg?resize=1200:*'></img>
          </div>
          <div className='newProducts3 '>
            <img className='productImage' src='https://www.nestle.com/sites/default/files/styles/banner_image_slider_style/public/starbucks-at-home-story-banner-2022.jpg?h=53e1d347&itok=W0AOYs-I'></img>
          </div>
          <div className='App'> 
          <Slider {...settings}>
          {ProductSlider.map(item=>(
             <div className='cardd'>
             <div className='card-topp'>
              <img src={item.linkImage} alt={item.title}/>
              <h4>{item.title}</h4>
             </div>
            </div>
          ))}
          </Slider>
          </div>
          
        
  </div>
  
  )
}

export default Home