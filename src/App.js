import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Nav-bar">
          <img className="main-logo" src="/images/logo.png" />
          <h1>CountdownerBeta</h1>
        </div>
        <div className="main">
          <div className="info">
            <h2>Features Requested Thus Far</h2>
            <p>• Dianamic Sizing from the corner</p>
            <p>• A Color Slider in Settings For the main Color of each Theme</p>
            <h4>Current Beta Version | beta.13</h4>
            <div className="downloads">
              <button href="/downloads/CountdownerBeta-1.0.0-beta.13.dmg">
                Download the Beta for MAC
              </button>
              <button href="/downloads/CountdownerBeta Setup 1.0.0-beta.13.exe">
                Download the Beta for PC
              </button>
            </div>
          </div>
          <div className="preview">
            <img className="preview" src="/images/countdownerPreview.png" />
          </div>
        </div>
        <div className="Footer">
          <p>
            <img className="leath-logo" src="/images/LeathRedSmall.png" />
            If you are interested in helping with our beta test by providing
            feedback on this app, please email team@vanderdys.design
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
