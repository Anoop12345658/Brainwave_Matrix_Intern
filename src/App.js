import React, { useState, useEffect } from 'react';
import './App.css';

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
      bubble.className = 'bubble';
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
    <section>
      <div className="circle" style={{ backgroundColor: circleColor }}></div>
      <header>
        <a href="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="logo" alt="Starbucks Logo" /></a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">What's New</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </header>
      <div className="content">
        <div className="textBox">
          <h2>It's not just Coffee<br />It's <span>Starbucks</span></h2>
          <p>Starbucks is a chain of coffee shops in the heart of the city. They've been around for over 200 years and continue to grow in popularity.</p>
          <a href="/" className="button">Learn More</a>
        </div>
        <div className="imgBox">
        <img src={`${process.env.PUBLIC_URL}/images/drinks/${currentImage}`} className="starbucks" alt="Starbucks Drink" />
        </div>
      </div>
      <ul className="thumb">
      <li><img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb1.png`} onClick={() => imgSlider('img1.png', '#017143')} alt="Thumb 1" /></li>
      <li><img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb2.png`} onClick={() => imgSlider('img2.png', '#eb7495')} alt="Thumb 2" /></li>
      <li><img src={`${process.env.PUBLIC_URL}/images/thumbs/thumb3.png`} onClick={() => imgSlider('img3.png', '#d752b1')} alt="Thumb 3" /></li>
      </ul>
      <ul className="sci">
      <li><a href="/"><img src={`${process.env.PUBLIC_URL}/images/icons/facebook.png`} alt="Facebook" /></a></li>
      <li><a href="/"><img src={`${process.env.PUBLIC_URL}/images/icons/twitter.png`} alt="Twitter" /></a></li>
      <li><a href="/"><img src={`${process.env.PUBLIC_URL}/images/icons/instagram.png`} alt="Instagram" /></a></li>
      </ul>
    </section>
  );
}

export default App;
