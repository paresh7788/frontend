import React from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Wedo from './Wedo';


function Service() {
    let data =[
        {
          id:'1',
          head:"Service at RGOIT- 'Your Digital Success Starts Here!'",
          pass:"At RGOIT, we are committed to providing you with top-tier solutions that will elevate your online presence and drive your business towards digital success. Explore our services below to discover how we can tailor our expertise to meet your unique needs and goals. Whether you're seeking a boost in search engine rankings, a captivating website, a cutting-edge app, or a digital marketing strategy, we've got you covered. Your journey to digital excellence starts here."
        }
      ];
    return ( 
        <div>
            <Welcome  head={data[0].head} pass={data[0].pass}/>
            <Wedo/>
        </div>
    
        
     );
}

export default Service;