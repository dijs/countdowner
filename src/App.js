import React from 'react';
import Slider from 'react-slick';

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
          version: data.name,
          windows,
          osx
        });
      });
  }
  return { downloads };
}

function Screenshots() {
  return (
    <div className="screenshots">
      <Slider dots infinite>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdownerPreview.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdownerPreview.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdownerPreview.png"
            />
          </figure>
        </div>
      </Slider>
    </div>
  );
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
          <p>• Dynamic Sizing from the corner</p>
          <p>• A Color Slider in Settings For the main Color of each Theme</p>
          <h4>
            Current Beta Version | {downloads ? downloads.version : '...'}
          </h4>
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
          <div className="phone-message">
            <p>
              Currently this application is only available for desktops. Please
              comeback soon and download this Beta application on your Mac or
              PC.
            </p>
          </div>
        </aside>
        <Screenshots />
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
