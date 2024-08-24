import React, { useState, useEffect } from 'react';
import './App.css'; // You can remove this if all styles are converted to Tailwind

function App() {
  const [currentImage, setCurrentImage] = useState('img1.png');
  const [circleColor, setCircleColor] = useState('#017143');

  useEffect(() => {
    createBubbles();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imgSlider = (img, color) => {
    setCurrentImage(img);
    setCircleColor(color);
  };

  const createBubbles = () => {
    const circle = document.querySelector('.circle');
    circle.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble absolute rounded-full bg-white/10';
      const size = Math.random() * 60 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 5 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      circle.appendChild(bubble);
    }
  };

  const handleResize = () => {
    const img = document.querySelector('.starbucks');
    if (window.innerWidth < 768) {
      img.style.maxWidth = '250px';
    } else if (window.innerWidth < 1024) {
      img.style.maxWidth = '300px';
    } else {
      img.style.maxWidth = '340px';
    }
  };

  return (
    <section className="relative w-full min-h-screen py-24 px-10 flex justify-between items-center bg-white">
      <div className={`circle absolute top-0 left-0 w-full h-full ${circleColor} transition-all duration-500 ease-in-out overflow-hidden`} style={{ clipPath: 'circle(600px at right 800px)' }}></div>
      <header className="absolute top-0 left-0 w-full py-5 px-24 flex justify-between items-center">
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="relative max-w-[80px]" alt="Starbucks Logo" />
        </a>
        <ul className="relative flex">
          <li className="list-none">
            <a href="/" className="text-gray-800 font-normal ml-10">Home</a>
          </li>
          <li className="list-none">
            <a href="/" className="text-gray-800 font-normal ml-10">Menu</a>
          </li>
          <li className="list-none">
            <a href="/" className="text-gray-800 font-normal ml-10">What's New</a>
          </li>
          <li className="list-none">
            <a href="/" className="text-gray-800 font-normal ml-10">Contact</a>
          </li>
        </ul>
      </header>
      <div className="content relative w-full flex justify-between items-center">
        <div className="textBox max-w-[600px]">
          <h2 className="text-gray-800 text-4xl leading-[1.4em] font-medium">
            It's not just Coffee<br />It's <span className="text-green-700 text-xl font-black">Starbucks</span>
          </h2>
          <p className="text-gray-800">Starbucks is a chain of coffee shops in the heart of the city. They've been around for over 200 years and continue to grow in popularity.</p>
          <a href="/" className="inline-block mt-5 px-5 py-2.5 bg-green-700 text-white rounded-full font-medium tracking-wider">Learn More</a>
        </div>
        <div className="imgBox w-[600px] flex justify-end pr-12 mt-12 pb-7">
          <img src={`${process.env.PUBLIC_URL}/images/drinks/${currentImage}`} className="starbucks max-w-[250px] sm:max-w-[300px] md:max-w-[340px] drop-shadow-[10px_10px_15px_rgba(0,0,0,0.4)] transition-filter duration-300 ease-in-out hover:drop-shadow-[15px_15px_20px_rgba(0,0,0,0.5)]" alt="Starbucks Drink" />
        </div>
      </div>
      <ul className="thumb absolute left-1/2 bottom-5 transform -translate-x-1/2 flex">
        <li className="list-none inline-block mx-5 cursor-pointer transition-transform duration-500 hover:-translate-y-[15px]">
          <img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb1.png`} onClick={() => imgSlider('img1.png', '#017143')} className="max-w-[60px]" alt="Thumb 1" />
        </li>
        <li className="list-none inline-block mx-5 cursor-pointer transition-transform duration-500 hover:-translate-y-[15px]">
          <img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb2.png`} onClick={() => imgSlider('img2.png', '#eb7495')} className="max-w-[60px]" alt="Thumb 2" />
        </li>
        <li className="list-none inline-block mx-5 cursor-pointer transition-transform duration-500 hover:-translate-y-[15px]">
          <img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb3.png`} onClick={() => imgSlider('img3.png', '#d752b1')} className="max-w-[60px]" alt="Thumb 3" />
        </li>
      </ul>
      <ul className="sci absolute top-1/2 right-7 transform -translate-y-1/2 flex flex-col justify-center items-center">
        <li className="list-none">
          <a href="/" className="inline-block my-1.5 transform scale-60 filter invert">
            <img src={`${process.env.PUBLIC_URL}/images/icons/facebook.png`} alt="Facebook" />
          </a>
        </li>
        <li className="list-none">
          <a href="/" className="inline-block my-1.5 transform scale-60 filter invert">
            <img src={`${process.env.PUBLIC_URL}/images/icons/twitter.png`} alt="Twitter" />
          </a>
        </li>
        <li className="list-none">
          <a href="/" className="inline-block my-1.5 transform scale-60 filter invert">
            <img src={`${process.env.PUBLIC_URL}/images/icons/instagram.png`} alt="Instagram" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default App;
