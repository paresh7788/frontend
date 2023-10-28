
import "./css/Slide.css";
import React, { useEffect, useState } from 'react';
function Slide() {
    const slidesData = [
        {
          imageSrc: '/image/seo.png',
          description: 'Search Engine Optimization',
          text: "Unlock the full potential of your website with our SEO experts. We'll optimize your online content, improve your website's visibility, and drive organic traffic to your business."
        },
        {
          imageSrc: '/image/app.webp',
          description: 'App Development',
          text: 'Stay ahead of the competition with a mobile app that engages your audience and enhances user experience. Our app development services encompass iOS, Android, and cross-platform solutions, bringing your ideas to life.'
        },
        {
          imageSrc: '/image/web.png',
          description: 'Web Development',
          text: "Stand out in the crowded online marketplace with a custom website tailored to your brand. Our web development team will create a visually appealing, user-friendly, and responsive site that captures your audience's attention."
        },
        {
          imageSrc: '/image/digmark.png',
          description: 'Digital Marketing',
          text: "Maximize your reach and ROI with our digital marketing strategies. From social media management to PPC advertising and content marketing, we'll help you connect with your target audience and achieve your marketing goals."
        },
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
      
      useEffect(() => {
        const slideInterval = setInterval(nextSlide, 4700);
    
        return () => {
          clearInterval(slideInterval);
        };
      }, [currentSlide]);

      const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slidesData.length);
      };

    return ( 

        <div className="main">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`sub ${index === currentSlide ? 'active' : ''}`}>
          <div className="image">
            <img src={slide.imageSrc} alt="" />
          </div>
          <div className="description">
            <h2>{slide.description}</h2>
            <p>{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slide;