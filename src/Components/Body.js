import React from 'react'
import '../CSS/Body.css'
export default function Body() {
  return (
    <div className='Main'>
      <div className='Card-1'>
        <h4 id="fashion">Fashion</h4>
        <div className='images'>
          <a href="#link1">
            <div className="item">
                <img src={require('../Assets/31qVIrbLqJL._AC_SY200_.jpg')} alt="Fashion Item 1"></img>
              <p>Title: Fashion Item 1<br/>Price: ₹7890</p>
            </div>
          </a>
          <a href="#link2">
            <div className="item">
              <img src={require('../Assets/41dEcQR7UnL._AC_SY200_.jpg')} alt="Fashion Item 2"></img>
              <p>Title: Fashion Item 2<br/>Price: ₹7880</p>
              <p></p>
            </div>
          </a>
          <a href="#link3">
            <div className="item">
              <img src={require('../Assets/51AjohATwIL._AC_SY200_.jpg')} alt="Fashion Item 3"></img>
              <p>Title: Fashion Item 3 <br/>Price: ₹78920</p>
            </div>
          </a>
          <a href="#link4">
            <div className="item">
              <img src={require('../Assets/Desktop_CC__379x304._SY304_CB585903988_.jpg')} alt="Fashion Item 4"></img>
              <p>Title: Fashion Item 4 <br/>Price: ₹9020</p>
            </div>
          </a>
          <a href="#link5">
            <div className="item">
              <img src={require('../Assets/51o13K4h3-L._AC_SY200_.jpg')} alt="Fashion Item 5"></img>
              <p>Title: Fashion Item 5 <br/>Price: ₹70</p>
              </div>
          </a>
        </div>
      </div>
      <div className='Card-1'>
        <h4 id="books">Books</h4>
        <div className='images'>
          <div className="item">
            <a href="#link1">
              <img src={require('../Assets/download.jpeg')} alt="Book 1"></img>
            </a>
            <p>Title: Book 1 <br/>Price: ₹790</p>
          </div>
          <div className="item">
            <a href="#link2">
              <img src={require('../Assets/images (1).jpeg')} alt="Book 2"></img>
            </a>
            <p>Title: Book 2 <br/>Price: ₹90</p>
          </div>
          <div className="item">
            <a href="#link3">
              <img src={require('../Assets/images.jpeg')} alt="Book 3"></img>
            </a>
            <p>Title: Book 3 <br/>Price: ₹780</p>
          </div>
          <div className="item">
            <a href="#link4">
              <img src={require('../Assets/5173X4MCj3L._AC_SX184_.jpg')} alt="Book 4"></img>
            </a>
            <p>Title: Book 4 <br/>Price: ₹990</p>
          </div>
          <div className="item">
            <a href="#link5">
              <img src={require('../Assets/download (1).jpeg')} alt="Book 5"></img>
            </a>
            <p>Title: Book 5<br/>Price: ₹90</p>
          </div>
        </div>
      </div>

      <div className='Card-1'>
      <h4 id="electronics">Electronics</h4>
        <div className='images'>
            <img src={require('../Assets/ddd.jpeg')} alt="IPhone"></img>
            <img src={require('../Assets/dddd.jpeg')} alt="IPhone"></img>
            <img src={require('../Assets/dd.jpeg')} alt="IPhone"></img>
            <img src={require('../Assets/d1.jpeg')} alt="IPhone"></img>
        </div>
      </div>
      <div className='Card-1'>
      <h4 id="grocery">Grocery</h4>
        <div className='images'>
            <img src={require('../Assets/31qVIrbLqJL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/41dEcQR7UnL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51AjohATwIL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/Desktop_CC__379x304._SY304_CB585903988_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51o13K4h3-L._AC_SY200_.jpg')} alt="IPhone"></img>
        </div>
      </div>
      <div className='Card-1'>
      <h4 id="furniture">Furniture</h4>
        <div className='images'>
            <img src={require('../Assets/31qVIrbLqJL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/41dEcQR7UnL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51AjohATwIL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/Desktop_CC__379x304._SY304_CB585903988_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51o13K4h3-L._AC_SY200_.jpg')} alt="IPhone"></img>
        </div>
      </div>
      <div className='Card-1'>
      <h4 id="beauty">Beauty & Cosmetics</h4>
        <div className='images'>
            <img src={require('../Assets/31qVIrbLqJL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/41dEcQR7UnL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51AjohATwIL._AC_SY200_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/Desktop_CC__379x304._SY304_CB585903988_.jpg')} alt="IPhone"></img>
            <img src={require('../Assets/51o13K4h3-L._AC_SY200_.jpg')} alt="IPhone"></img>
        </div>
      </div>
    </div>
  )
}
