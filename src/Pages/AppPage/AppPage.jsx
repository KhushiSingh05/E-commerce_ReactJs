import React from 'react';
import './AppPage.css';

const AppPage = () => {
  
  return (
    <div className="app-container">
      <h1>Our App</h1>
      <p>
        Download our mobile application to shop on the go!  
        Available for both Android and iOS.
      </p>
      <div className="app-buttons">
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="google-play"
        >
          Get it on Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="app-store"
        >
          Download on the App Store
        </a>
      </div>
    </div>
  )
}

export default AppPage;
