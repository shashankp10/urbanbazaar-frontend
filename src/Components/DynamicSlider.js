import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageUrl from '../Assets/freepik__upload__46088.jpeg';
import imageUrl1 from '../Assets/freepik__upload__3577.jpeg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl} style={{ height: '22rem', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl1} style={{ height: '22rem', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item> 
      {/* <Carousel.Item>
        <img className="d-block w-100" src={imageUrl2} style={{ height: '250px', width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl5} style={{ height: '250px',width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl3} style={{ height: '250px',  width:'100%', marginBottom: '10px'}}/>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ControlledCarousel;