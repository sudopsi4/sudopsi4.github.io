import camera from "../assets/camera.png";
import typewriter from "../assets/typewriter.png";
import modular from "../assets/modular1.png";
import raven from "../assets/raven.png";
import stack from "../assets/stack.png";
import tree from "../assets/tree.webp"

export const words = [];
const titles = [
  "HELLO",
  "HOLA",
  "SALUT",
  "HALLO",
  "CIAO",
  "HEJ",
  "PRIVET",
  "NIHAO",
  "NAMASTE",
  "DOHMOH"
];
export const title = titles[Math.floor(Math.random() * titles.length)];

export const contentMap = {
  'ABOUT': {
    image : tree,
    content : (
      <div>
        <p>Hello! I am a computer science researcher with a keen interest in exploring patterns across diverse fields like mathematics, music, and philosophy.</p>
        <p>Delving into the intricacies of these subjects, seeking connections and insights that enrich our understanding of the world.</p>
        <p>Currently I run a YouTube Channel and Twitter Blog where I share captivating content that showcases the beauty of patterns and their relevance in our lives.</p>
        </div>
      
    )
  },
  'BLOG': {
    image : typewriter,
    content : (
        `Here is the link to my blog if you are interested. This is based on X (Former Twitter) and my username is @RecurrentRabbit`
    ),
    action : 'To Blog',
    link: 'https://the-nutshell.super.site/'
  },
  'YOUTUBE': {
    image : camera,
    content : (
        `For Intriguing content on beauty of patterns, subscribe 'Abstrakt' on YouTube.`
    ),
    action : 'To Channel',
    link : 'https://www.youtube.com/channel/UCAERp_ed75UPSy0W_Yu3J0w'
  },
  'X': {
    image : raven,
    content : (
        `Find me on X (Former Twitter), @RecurrentRabbit`
    ),
    action : 'To X',
    link : 'https://twitter.com/RecurrentRabbit'
  },
  'PROJECTS': {
    image : modular,
    content: (
        `Have a look at my CompSci projects.`
    ),
    action : 'To Github',
    link : 'https://github.com/abhidaberao'
  },
  'STACK' : {
    image : stack,
    content : (
      `These pages are for demo purposes.
      There is no sense in making separate pages for social link.`
    ),
    action : "To Stack",
    link : 'https://stackexchange.com/users/9906557/aether'
  }
};
