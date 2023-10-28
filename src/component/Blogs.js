import React from 'react';
import { useSpring, animated } from 'react-spring';
import './css/Blogs.css';

function Blogs() {
    const divProps = useSpring({
        from: { opacity: 0, transform: 'translateY(100px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
        // loop: true, // Continuous animation
      });

    return (
        <div className="main-container">
      <h1>Our Importance!</h1>
      <div className="sub-div">
        <animated.h2 style={divProps}>"The Importance of Local SEO for Small Businesses"</animated.h2>
        <animated.p style={divProps}>
        In this blog post, we'll explore how local SEO can be a game-changer for small businesses. Learn about the strategies and tactics that can boost your local online presence, attract nearby customers, and ultimately drive more foot traffic to your store or more inquiries to your services.
        </animated.p>
      </div>
      <div className="sub-div">
        <animated.h2 style={divProps}>"Responsive Web Design: Why It's Crucial for User Experience"</animated.h2>
        <animated.p style={divProps}>
        A responsive web design is no longer an option; it's a necessity. Discover the ins and outs of responsive design and why it's vital for providing an exceptional user experience. We'll also share tips on optimizing your website for various devices to keep visitors engaged.
        </animated.p>
      </div>
      <div className="sub-div">
        <animated.h2 style={divProps}>"The Mobile App Development Process: From Idea to Launch"</animated.h2>
        <animated.p style={divProps}>
        Interested in developing a mobile app? This blog post will guide you through the entire process, from conceptualization to launch. We'll break down each step, share best practices, and highlight key considerations to help turn your app idea into a reality.
        </animated.p>
      </div>
      <div className="sub-div"> 
         <animated.h2 style={divProps}>"Social Media Marketing Strategies for 2023"</animated.h2>
        <animated.p style={divProps}>
        The social media landscape is constantly evolving. Stay ahead of the curve with our insights into the most effective social media marketing strategies for the year 2023. From content trends to platform-specific tips, we've got the latest tactics to help you connect with your target audience.
        </animated.p>
      </div>
    </div>

      );
}

export default Blogs;