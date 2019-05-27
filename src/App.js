import React from 'react';
import './main.scss';

function App() {
  return (
    <div className="container">
      <header>
        <img alt="countdowner logo" src="/images/logo.png" />
        <h1>
          Countdowner<sub>Beta</sub>
        </h1>
      </header>
      <main>
        <aside>
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
        </aside>
        <figure>
          <img alt="countdowner preview" src="/images/countdownerPreview.png" />
        </figure>
      </main>
      <footer>
        <img alt="leath logo" src="/images/LeathRedSmall.png" />
        If you are interested in helping with our beta test by providing
        feedback on this app, please email team@vanderdys.design
      </footer>
    </div>
  );
}

export default App;
