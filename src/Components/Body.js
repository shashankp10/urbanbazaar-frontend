import React from 'react'
import '../CSS/Body.css'
import CategoryCard from './CategoryCard';
export default function Body() {
  const categories = [
    {
      title: 'Mobile',
      items: [
        { image: '31qVIrbLqJL._AC_SY200_.jpg', title: 'Samsung M35', price: 7890, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Fashion Item 1' },
        { image: '41dEcQR7UnL._AC_SY200_.jpg', title: 'Fashion Item 2', price: 7880, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ', altText: 'Fashion Item 2' },
        { image: '51AjohATwIL._AC_SY200_.jpg', title: 'Fashion Item 3', price: 78920, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Fashion Item 3' },
        { image: 'Desktop_CC__379x304._SY304_CB585903988_.jpg', title: 'Fashion Item 4', price: 9020, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Fashion Item 4' },
        { image: '51o13K4h3-L._AC_SY200_.jpg', title: 'Fashion Item 5', price: 70, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Fashion Item 5' },
      ]
    },
    {
      title: 'Books',
      items: [
        { image: 'download.jpeg', title: 'Book 1', price: 790, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Book 1' },
        { image: 'images (1).jpeg', title: 'Book 2', price: 90, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ', altText: 'Book 2' },
        { image: 'images.jpeg', title: 'Book 3', price: 780, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Book 3' },
        { image: '5173X4MCj3L._AC_SX184_.jpg', title: 'Book 4', price: 990, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Book 4' },
        { image: 'download (1).jpeg', title: 'Book 5', price: 90, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'Book 5' },
      ]
    },
    {
      title: 'Electronics',
      items: [
        { image: 'ddd.jpeg', title: 'IPhone', price: 100000, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'IPhone' },
        { image: 'dddd.jpeg', title: 'IPhone', price: 105000, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'IPhone' },
        { image: 'dd.jpeg', title: 'IPhone', price: 110000, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'IPhone' },
        { image: 'd1.jpeg', title: 'IPhone', price: 120000, description: 'loreum ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', altText: 'IPhone' },
      ]
    },
  ];  
  return (
    <div className='Main'>
      {categories.map((category, index) => (
        <CategoryCard key={index} title={category.title} items={category.items} />
      ))}
    </div>
  )
}
