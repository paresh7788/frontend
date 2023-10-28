import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Blogs from './Blogs';
import './css/About.css';
import Choose from './Choose';

function About() {
    let data =[
        {
          id:'1',
          head:"About RGOIT- Empowering Your Digital Success",
          pass:"Welcome to RGOIT, where our mission is to empower your digital success. We're not just another digital service provider; we're your strategic partner in navigating the dynamic and ever-evolving online world. With a passion for innovation and a commitment to excellence, we're dedicated to helping your business thrive in the digital landscape.Our journey began with a simple idea: to provide high-quality digital services that make a real impact. Over the years, we've honed our skills, expanded our team of experts, and adapted to the changing needs of our clients. Today, we proudly stand as a comprehensive solution for all your digital requirements, from SEO and web development to app development and digital marketing."
        }
      ];
    return ( 
        <div>
           <Welcome  head={data[0].head} pass={data[0].pass}/>
           <Blogs/>
            <div className="container">
                {/* <img className="left-image" src="/image/per.png" alt="Left Image" /> */}
                <Choose/>
                <main>
                    {/* Your main content goes here */}
                    <h1>"Let's Connect!"</h1>
                    <p>We're here to help you succeed in the digital world. If you have any questions, need more information about our services, or want to discuss how we can assist your business, don't hesitate to reach out. Our team is ready to provide you with the support and guidance you need to achieve your digital goals. Feel free to get in touch with us using the contact information below. Your success is our priority!</p>
                </main>
                <img className="right-image" src="/image/per2.png" alt="Right Image" />
            </div>
            
        </div>

     );
}

export default About;