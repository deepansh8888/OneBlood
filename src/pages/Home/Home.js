// Home.js
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout.js';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = Cookies.get('username'); // Read the username from cookies
    if (username) {
      setUser(username);
    }
  }, [setUser]);

  return (
    <div>
      <section>
        <h2>Welcome {user}</h2>
        <Logout className="logout-button" />
      </section>

      <div className="options">
        <div className="option">
          <h3>Donate Blood</h3>
          <span><Link to="/schedule-availability">Schedule Availability</Link></span>
          <span><Link to="/view-requests">View Requests</Link></span>
        </div>

        <div className="option">
          <h3>Need Blood</h3>
          <span><Link to="/view-available-donors">Available Donors</Link></span>
          <span><Link to="/post-request">Post Request</Link></span> 
        </div>

        <div className="option">
          <h3>Contribute</h3>
          <span>Contribute to Organizations</span>
        </div>
      </div>
    </div>
  );
};

export default Home;



