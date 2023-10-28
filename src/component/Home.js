import React from 'react';
import Navbar from "./Navbar";
import Welcome from './Welcome';
import Slide from './Slide';
import Choose from './Choose';
import Blogs from './Blogs';

function Home() {
    let data =[
        {
          id:'1',
          head:"Welcome to Rajput Group Of Information Tech.",
          pass:"Hello User! Welcome to our website.At RGOIT, we are passionate about helping businesses thrive in the digital age. With a team of experienced professionals, we offer a comprehensive range of services to boost your online presence and drive success. Whether you're looking to climb the search engine rankings, create a stunning website, develop a cutting-edge mobile app, or harness the power of digital marketing, we've got you covered."
        }
      ];
    return (  
        <div>
      <Welcome  head={data[0].head} pass={data[0].pass}/>
      <Slide/>
      <Choose/>
      <Blogs/>
     
     
      

    </div>


    );
}

export default Home;