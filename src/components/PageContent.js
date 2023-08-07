import camera from "../assets/camera.png";
import typewriter from "../assets/typewriter.png";
import modular from "../assets/modular1.png";
import tessel from "../assets/tessel2.png";
import stack from "../assets/stackx.png";
import tree from "../assets/tree.webp";
import "./OverlayPage.css";
import ytb from "../assets/ytb.png";
import x from "../assets/x.png";
import transmitter from "../assets/transmitter.png"
import { TwitterTimelineEmbed, TwitterShareButton} from "react-twitter-embed";
import XTimelineContainer from "./XTimelineContainer";

const openLink = (link) => {
  var win = window.open(link, '_blank');
  win.focus();
}


export const words = [];
const titles = [
  "HELLO"
];
export const title = titles[Math.floor(Math.random() * titles.length)];

const socialLinks = [
  { label : '', link : 'https://twitter.com/thetesselwolf',image : x},
  { label : 'Youtube', link : 'https://www.youtube.com/channel/UCAERp_ed75UPSy0W_Yu3J0w', image : ytb},
  { label : 'Blog', link : 'https://the-nutshell.super.site/'},
  { label : 'Stack Exchange', link : 'https://stackexchange.com/users/9906557/aether', image : stack}
]

export const contentMap = {
  'ABOUT': {
    image : tree,
    content : (
      <div>
        <p>Dear Reader,<br/><br/>I am a CompSci researcher, interested in exploring patterns across diverse fields like mathematics, music, and philosophy.</p>
        <p>If delving into the such intricacies is your muse, you'll find this place interesting. Currently I run a YouTube Channel and Blog where I share the kind of stuff you'd be interested in.</p>
        <br/><p>You can find me here:</p>
        <div className="social-links">
          {
            socialLinks.map((s) => 
            <div className="op-action-button op-action-button-chip" onClick={() => {openLink(s.link)}}>
              {s.image?<img className="button-image" src={s.image} />:null}{s.label}
            </div>
            )
          }
        </div>
        </div>
      
    )
  },
  'BLOG': {
    image : transmitter,
    content : (
      <div>
        This section is currently under work. 
      </div>
    ),
    action : 'To Blog',
    link: 'https://the-nutshell.super.site/'
  },
  'CHANNEL': {
    image : camera,
    content : (
        `For Intriguing content on beauty of patterns, subscribe 'Abstrakt' on YouTube.`
    ),
    action : 'To Channel',
    link : ''
  },
  'PROJECTS': {
    image : modular,
    content: (
        `Have a look at my CompSci projects.`
    ),
    action : 'To Github',
    link : 'https://github.com/abhidaberao'
  },
  'ART': {
    image : tessel,
    content: (
        `Have a look at my CompSci projects.`
    ),
    action : 'To Github',
    link : 'https://github.com/abhidaberao'
  },

};
