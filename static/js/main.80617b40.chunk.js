(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),o=n.n(r),i=n(8),c=n(7),s=n.n(c);n(29);function m(){return l.a.createElement("div",{className:"screenshots"},l.a.createElement(s.a,{dots:!0,infinite:!0,arrows:!1},l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-1.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-2.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-setting-1.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-3.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-4.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-setting-2.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-5.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-setting-4.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-6.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-7.png"}))),l.a.createElement("div",null,l.a.createElement("figure",null,l.a.createElement("img",{alt:"countdowner preview",src:"/images/countdowner-preview-setting-3.png"})))))}var u=function(){var e=function(){var e=l.a.useState(),t=Object(i.a)(e,2),n=t[0],a=t[1];return n||fetch("https://api.github.com/repos/dijs/countdowner/releases/latest").then(function(e){return e.json()}).then(function(e){if(e.assets){var t=e.assets.find(function(e){return-1!==e.name.indexOf("exe")}).browser_download_url,n=e.assets.find(function(e){return-1!==e.name.indexOf("dmg")}).browser_download_url;a({version:e.name,windows:t,osx:n})}}),{downloads:n}}().downloads;return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("img",{alt:"countdowner logo",src:"/images/logo.png"}),l.a.createElement("h1",null,"CountdownerBeta",l.a.createElement("sup",null,"tm"))),l.a.createElement("main",null,l.a.createElement("aside",null,l.a.createElement("h2",null,"Recent Features Added to Beta"),l.a.createElement("p",null),l.a.createElement("p",null,"\u2022 Seperated settings page into tabs for easier navigation."),l.a.createElement("p",null,"\u2022 Added alarm and soundtrack volumes for a better experience during video conferencing."),l.a.createElement("p",null,"\u2022 Updated sliders in setting for easier use."),l.a.createElement("p",null,"\u2022 Added a issue support questionaire to the help/info menu."),l.a.createElement("p",null,"\u2022 Custom fronts for Car and Navy themes."),l.a.createElement("p",null,"\u2022 Added a new khaki theme with a customizable primary color"),l.a.createElement("p",null,"\u2022 Fixed some more known bugs."),l.a.createElement("h4",null,"Current Beta Version | ",e?e.version:"..."," | Last updated: May 8, 2020")),l.a.createElement("div",{className:"right-side"},e&&l.a.createElement("div",{className:"downloads"},l.a.createElement("a",{href:e.osx,onClick:function(){return window.gtag("event","mac download")}},l.a.createElement("button",null,"Download the Beta for MAC")),l.a.createElement("a",{href:e.windows,onClick:function(){return window.gtag("event","pc download")}},l.a.createElement("button",null,"Download the Beta for PC")),l.a.createElement("p",null,"Opening this application will show a warning for an un-verified developer on most devices. Please shift-click or",l.a.createElement("strong",null," Control-click the app icon"),", then choose Open from the shortcut menu. For PC users, just follow the prompt window displayed when opening the application.")),l.a.createElement("div",{className:"phone-message"},l.a.createElement("p",null,"Currently this application is only available for desktops. Please comeback soon and download this Beta application on your Mac or PC.")),l.a.createElement("div",{className:"image-container"},l.a.createElement(m,null)),l.a.createElement("a",{className:"mailchimp",href:"https://mailchi.mp/1ce0b4afdb69/countdowner-tm"},l.a.createElement("button",null,l.a.createElement("strong",null,"Subscribe Here")," ",l.a.createElement("br",null),"for News, Updates, and Surveys")))),l.a.createElement("div",{className:"feature-section"},l.a.createElement("div",{className:"left-ideas"},l.a.createElement("h2",null,"Ideas We've Received & Things We Have in Mind (if you agree please tell us so we know if they're popular)"),l.a.createElement("p",null,"\u2022 In-depth legibility testing on themes for both laptop and projection"),l.a.createElement("p",null,"\u2022 Add seasonal and holiday themes"),l.a.createElement("p",null,"\u2022 Move all available sounds to Creative commons"),l.a.createElement("p",null,"\u2022 These really are all we have recieved and not implemented, so please share your awesome ideas with us."),l.a.createElement("h2",null,"Known Bugs on our Radar"),l.a.createElement("p",null,"\u2022 The mute button on the home page only mutes the soundtrack and the alarm")),l.a.createElement("div",null,l.a.createElement("h2",null,"Full Features List"),l.a.createElement("p",null,"\u2022 Provide a list of preloaded soundtrack/alarm options plus a blank option"),l.a.createElement("p",null,"\u2022 Tool tips to show you around the app, and the ability to disaible them"),l.a.createElement("p",null,"\u2022 Variable speed slider for slowing and speeding up soundtracks"),l.a.createElement("p",null,"\u2022 Ability to force or disable the application window being brought to the front of all other windows"),l.a.createElement("p",null,"\u2022 Custom settings persist when closing and reopening app"),l.a.createElement("p",null,"\u2022 Dynamic Sizing from the Corner"),l.a.createElement("p",null,"\u2022 A color picker in settings for the main color of default and dark theme"),l.a.createElement("p",null,"\u2022 Monochromatic, Car Dashboard Theme, Dark mode, Futuristic, US Navy and US Army themes"),l.a.createElement("p",null,"\u2022 A email subscription button for app updates and news"),l.a.createElement("p",null,"\u2022 Blinking timer as the countdown nears the end"),l.a.createElement("p",null,"\u2022 Soundtrack interval setting: to start the track every minute as a signal to the audience of how quickly the time is passing."),l.a.createElement("p",null,"\u2022 Many sounds are now marked CC - indecating that they are sourced from the creative commons"),l.a.createElement("p",null,"\u2022 New custom fonts for many of our themes"),l.a.createElement("p",null,"\u2022 New playback frequency setting: controls how often a audio clip is repeated"),l.a.createElement("p",null,"\u2022 Added our first textured custom background to the car theme"))),l.a.createElement("footer",null,l.a.createElement("img",{alt:"leath logo",src:"/images/LeathRedSmall.png"}),l.a.createElement("p",null,"If you are interested in helping with our beta test by providing feedback on this app, please email",l.a.createElement("a",{href:"mailto:team@vanderdys.design"},"team@vanderdys.design")," or fillout this"," ",l.a.createElement("a",{href:"https://team846642.typeform.com/to/l1SDaB"},"online feedback form."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(30)}},[[9,1,2]]]);
//# sourceMappingURL=main.80617b40.chunk.js.map