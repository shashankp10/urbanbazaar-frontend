import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function CategoryCard({ title, items }) {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate('/productview', { state: item });
  };

  return (
    <div style={{cursor: 'pointer'}} className='Card-1'>
      <h4>{title}</h4>
      <div className='images'>
        {items.map((item, index) => (
          <div key={index} className='item' onClick={() => handleClick(item)}>
            <img src={require(`../Assets/${item.image}`)} alt={item.altText} />
            <p>Title: {item.title}<br/>Price: ₹{item.price}</p>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}
