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
      <Slider dots infinite arrows={false}>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-1.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-2.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-setting-1.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-3.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-4.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-setting-2.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-5.png"
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
          CountdownerBeta<sup>tm</sup>
        </h1>
      </header>
      <main>
        <aside>
          <h2>Features Added to Beta (this version)</h2>
          <p>
            • Tool tips on settings and a way to disable them when you get to
            know your way around the app
          </p>
          <p>• Updated setting verbiage for ease of use and understanding</p>
          <p>• Added 5 new sound bites</p>
          <p>
            • Redesigned the speed sliders to show slow, normal, and fast speeds
          </p>
          <p>
            • Added a setting to force and disable the window being brought to
            the front of all other windows
          </p>
          <h2>Features Added to Beta (previous versions)</h2>
          <p>• Settings persist when closing and reopening app</p>
          <p>• Dynamic Sizing from the Corner</p>
          <p>
            • A Color Slider in Settings For the main Color of Default Theme
          </p>
          <p>
            • A New Monochromatic and Car Dashboard Theme (we are working on a
            color picker for the car as well)
          </p>
          <h2>
            Ideas We've Received (if you agree please tell us so we know if
            they're popular)
          </h2>
          <p>
            • Soundtrack interval setting: to start the track every minute as a
            signal to the audience of how quickly the time is passing.
          </p>
          <p>• Blinking timer as it nears the end</p>
          <p>• Add a drum roll soundtrack/alarm</p>
          <h4>
            Current Beta Version | {downloads ? downloads.version : '...'} |
            Last updated: July 16, 2019
          </h4>
          {downloads && (
            <div className="downloads">
              <a
                href={downloads.osx}
                onClick={() => window.gtag('event', 'mac download')}
              >
                <button>Download the Beta for MAC</button>
              </a>
              <a
                href={downloads.windows}
                onClick={() => window.gtag('event', 'pc download')}
              >
                <button>Download the Beta for PC</button>
              </a>
              <p>
                Since the application is still under development, it will show a
                warning for Mac users.
              </p>
              <p>
                Please Control-click the app icon, then choose Open from the
                shortcut menu.
              </p>
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
