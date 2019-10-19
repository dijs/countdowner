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
          <p>• A blank soundtrack/alarm option</p>
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
          {/*Start of Done:*/}
          <p>• Add a Military and Navy theme</p>
          <p>• A email subscription button for app updates and news</p>
          <p>• Blinking timer as it nears the end</p>
          <p>• Add a drum roll soundtrack/alarm</p>
          <p>• Add a dark mode with a custom accent color</p>
          {/*• legibility issue appears in the futuristic mode specifically*/}
          {/*• Move sounds to creative commons*/}
          {/*• Added custom fonts font and overall size in futuristic and US army themes*/}
          {/*enable sound preview ON and tool tips for default setting - I tried but the config file isn't working*/}
          {/*Bug: If enabled and you change it, the next clip plays and should not.*/}
          {/* Remove extra space Apply Settings/-Return to Timer */}
          {/* Playback frequency setting - controls how often a audio clip is repeated */}
          {/*End of Done*/}
          <p>
            • Enlarge the live countdown to take up more real estate when your
            window is large.
          </p>
          {/*• Add custom fonts font and overall size in car and US navy themes*/}
          {/*• Add custom background for car theme*/}
          {/*• Work on resizing for us army theme*/}
          {/* Contimue moving sounds to creative commons */}
          <p>
            • Soundtrack interval setting: to start the track every minute as a
            signal to the audience of how quickly the time is passing.
          </p>
          <p>
            • Settings Menu: Add a quick start option, or allow for a shallow
            and in-depth view of the many setting options.
            {/* Re-layout/Simplify settings view */}
            {/* Make the start button easier to find in the settings */}
          </p>
          <p>
            • In-depth legibility testing on themes for both laptop and
            projection
          </p>
          {/*clay requested we default off on the tooltips - but I think during beta that's not a great idea*/}
          <p>• Add a khaki theme with a customizable primary color</p>
          <p>• Add seasonal and holiday themes</p>
          {/* check tooltips */}
          <h4>
            Current Beta Version | {downloads ? downloads.version : '...'} |
            Last updated: July 16, 2019
          </h4>
        </aside>
        <div className="right-side">
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
                warning for Mac users. Please{' '}
                <strong>Control-click the app icon</strong>, then choose Open
                from the shortcut menu.
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
          <Screenshots />
          <a
            className="mailchimp"
            href="https://mailchi.mp/1ce0b4afdb69/countdowner-tm"
          >
            <button>
              <strong>Subscribe Here</strong> <br />
              for News, Updates, and Surveys
            </button>
          </a>
        </div>
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
