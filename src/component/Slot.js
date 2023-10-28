import React, { useState } from "react";
import axios from "axios";
import './css/Slot.css';


  function Slot() {
    const [formvalue, setFormvalue] = useState({ username: '', email: '' ,phone: '',option: ''});

    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        alert("Response has been recorded RGOIT Team will cantact you soon!")
        window.location.reload();
        e.preventDefault();
        const jsonData = {
          username: formvalue.username,
          email: formvalue.email,
          phone:formvalue.phone,
          option:formvalue.option
        };

        try {
            const response = await axios.post("http://localhost/react-CURD/api/server.php", jsonData, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
      
            alert(response.data[0]);
            window.location.reload(); // Handle the response from the server
          } catch (error) {
            console.error("Error:", error);
          }
        };


    return (
        <div className="containner">
            <h2>Book Your Slot Now :)</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="username" value={formvalue.username} onChange={handleInput} required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formvalue.email} onChange={handleInput} required /><br /><br />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={formvalue.phone} 
        onChange={handleInput} required /><br /><br />

        <label htmlFor="preference">Choose Your Preference:</label>
                <select id="preference" name="preference"  onChange={handleInput} required>
                    <option value="">~Select~</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                </select>

        <input type="submit" value="Submit" />
      </form>

        </div>
      );
  }
  
  export default Slot;