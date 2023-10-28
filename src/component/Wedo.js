import React from 'react';
import './css/Wedo.css';
const Wedo = ()=>{

    return(
        <div className="main-div">
      <div className="sub-div">
        <div className="image left">
          <img src="/image/app.webp" alt="Image 1" />
        </div>
        <div className="content right">
          <h2>App development</h2>
          <p className="animated-text">At RGOIT, we turn your app ideas into reality. Our app development team is passionate about creating innovative and user-friendly mobile applications that engage and delight users. From conceptualization and design to development and launch, we take your vision and transform it into a functional and visually stunning mobile app. Whether you're looking to reach a wider audience, streamline internal processes, or enhance user experience, we have the expertise and experience to deliver top-notch apps that drive success in the digital world.</p>
        </div>
      </div>
      <div className="sub-div">
        <div className="content left">
          <h2>Web development</h2>
          <p className="animated-text"> We specialize in crafting exceptional websites that make a lasting impression. Our web development team is dedicated to creating fully customized, responsive, and user-friendly websites tailored to your brand's unique identity. We understand that your website is often the first interaction a potential customer has with your business, and it needs to captivate and convert. Whether you're in need of a brand-new site, a redesign, or ongoing maintenance, we have the skills and creativity to build a digital home that truly represents your business and helps you stand out in the online world.</p>
        </div>
        <div className="image right">
          <img src="/image/web.png" alt="Image 2" />
        </div>
      </div>
      <div className="sub-div">
        <div className="image left">
          <img src="/image/seo.png" alt="Image 3" />
        </div>
        <div className="content right">
          <h2>SEO</h2>
          <p className="animated-text"> we are your gateway to improved visibility in the digital landscape. Our SEO experts are committed to elevating your online presence by optimizing your website for search engines. With a laser-focused approach on keyword research, on-page and off-page optimization, and data-driven strategies, we can propel your website to the top of search engine rankings. Our goal is to drive organic traffic to your site, enhance your brand's visibility, and ultimately boost your online success. Let us be your SEO partner on the path to digital prominence.</p>
        </div>
      </div>
      <div className="sub-div">
        <div className="content left">
          <h2>Digital Marketing</h2>
          <p className="animated-text">we're your compass in the digital marketing landscape. Our digital marketing experts are dedicated to steering your brand towards success in the online world. We offer a comprehensive suite of services, including social media management, pay-per-click advertising, content marketing, and more, to help you connect with your target audience effectively. We understand the dynamic nature of digital marketing and keep our strategies current and engaging. Let us be your guide to crafting winning digital campaigns that captivate, convert, and drive your business forward in the ever-evolving digital realm.</p>
        </div>
        <div className="image right">
          <img src="/image/digmark.png" alt="Image 4" />
        </div>
      </div>
    </div>

    );
};
export default Wedo;