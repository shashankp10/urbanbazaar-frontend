import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageUrl from '../Assets/6cd4f58ce14ba48d.webp';
import imageUrl1 from '../Assets/3198ad782dcf5f2c.webp';
import imageUrl2 from '../Assets/a2f0763050560219.webp';
import imageUrl3 from '../Assets/fd835e5163084483.webp';
import imageUrl5 from '../Assets/fba99b97b0581fb3.webp';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl} style={{ height: '250px', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl1} style={{ height: '250px', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item> <Carousel.Item>
        <img className="d-block w-100" src={imageUrl2} style={{ height: '250px', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl5} style={{ height: '250px',width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl3} style={{ height: '250px',  width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;