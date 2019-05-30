import React from 'react';
import './main.scss';

function useDownloads() {
  const [downloads, setDownloads] = React.useState();
  if (!downloads) {
    fetch('https://api.github.com/repos/dijs/countdowner/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (!data.assets) {
          return;
        }
        const windows = data.assets.find(
          ({ name }) => name.indexOf('exe') !== -1
        ).browser_download_url;
        const osx = data.assets.find(({ name }) => name.indexOf('dmg') !== -1)
          .browser_download_url;
        setDownloads({
          windows,
          osx
        });
      });
  }
  return { downloads };
}

function App() {
  const { downloads } = useDownloads();
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
          {downloads && (
            <div className="downloads">
              <a href={downloads.osx}>
                <button>Download the Beta for MAC</button>
              </a>
              <a href={downloads.windows}>
                <button>Download the Beta for PC</button>
              </a>
            </div>
          )}
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
