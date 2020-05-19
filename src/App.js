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
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-setting-4.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-6.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-7.png"
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              alt="countdowner preview"
              src="/images/countdowner-preview-setting-3.png"
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
          <h2>Recent Features Added to Beta</h2>
          <p />
          <p>• Seperated settings page into tabs for easier navigation.</p>
          <p>
            • Added alarm and soundtrack volumes for a better experience during
            video conferencing.
          </p>
          <p>• Updated sliders in setting for easier use.</p>
          <p>• Added a issue support questionaire to the help/info menu.</p>
          <p>• Custom fronts for Car and Navy themes.</p>
          <p>• Added a new khaki theme with a customizable primary color</p>
          <p>• Fixed some more known bugs.</p>
          <h4>
            Current Beta Version | {downloads ? downloads.version : '...'} |
            Last updated: May 8, 2020
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
                Opening this application will show a warning for an un-verified
                developer on most devices. Please shift-click or
                <strong> Control-click the app icon</strong>, then choose Open
                from the shortcut menu. For PC users, just follow the prompt
                window displayed when opening the application.
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
          <div className="image-container">
            <Screenshots />
          </div>
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
      <div className="feature-section">
        <div className="left-ideas">
          <h2>
            Ideas We've Received & Things We Have in Mind (if you agree please
            tell us so we know if they're popular)
          </h2>
          <p>
            • In-depth legibility testing on themes for both laptop and
            projection
          </p>
          <p>• Add seasonal and holiday themes</p>
          <p>• Move all available sounds to Creative commons</p>
          {/* Contimue moving sounds to c
          reative commons */}
          {/* check tooltips */}
          <p>
            • These really are all we have recieved and not implemented, so
            please share your awesome ideas with us.
          </p>
          <h2>Known Bugs on our Radar</h2>
          <p>
            • The mute button on the home page only mutes the soundtrack and the
            alarm
          </p>
        </div>
        <div>
          <h2>Full Features List</h2>
          <p>
            • Provide a list of preloaded soundtrack/alarm options plus a blank
            option
          </p>
          <p>
            • Tool tips to show you around the app, and the ability to disaible
            them
          </p>
          <p>• Variable speed slider for slowing and speeding up soundtracks</p>
          <p>
            • Ability to force or disable the application window being brought
            to the front of all other windows
          </p>
          <p>• Custom settings persist when closing and reopening app</p>
          <p>• Dynamic Sizing from the Corner</p>
          <p>
            • A color picker in settings for the main color of default and dark
            theme
          </p>
          <p>
            • Monochromatic, Car Dashboard Theme, Dark mode, Futuristic, US Navy
            and US Army themes
          </p>
          <p>• A email subscription button for app updates and news</p>
          <p>• Blinking timer as the countdown nears the end</p>
          <p>
            • Soundtrack interval setting: to start the track every minute as a
            signal to the audience of how quickly the time is passing.
          </p>
          <p>
            • Many sounds are now marked CC - indecating that they are sourced
            from the creative commons
          </p>
          <p>• New custom fonts for many of our themes</p>
          <p>
            • New playback frequency setting: controls how often a audio clip is
            repeated
          </p>
          <p>• Added our first textured custom background to the car theme</p>
        </div>
      </div>

      <footer>
        <img alt="leath logo" src="/images/LeathRedSmall.png" />
        <p>
          If you are interested in helping with our beta test by providing
          feedback on this app, please email
          <a href="mailto:team@vanderdys.design">team@vanderdys.design</a> or
          fillout this{' '}
          <a href="https://team846642.typeform.com/to/l1SDaB">
            online feedback form.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
