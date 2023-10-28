import React from "react";
import Welcome from "./Welcome";
import Slot from "./Slot";
import Map from "./Map";
function Contact() {
    let data =[
        {
          id:'1',
          head:"Get in Touch",
          pass:"We're here to listen, assist, and connect. Feel free to reach out to us for any inquiries, questions, or collaborations. Whether you have a project in mind, need assistance with our services, or simply want to explore how we can help your business succeed in the digital realm, our friendly team is just a message away. We look forward to hearing from you and being part of your digital journey."
        }
      ];
    return (  
        <div>
            <Welcome  head={data[0].head} pass={data[0].pass}/>
            <Slot/>
            <Map/>

        </div>
        
        
    );
}

export default Contact;