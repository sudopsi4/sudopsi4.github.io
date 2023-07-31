import hangingImg from "../assets/hanging.gif";
import library from "../assets/library.gif";
import garden from "../assets/garden.webp";
import house from "../assets/house.gif"

export const words = [];
const titles = [
  "HELLO",
  "HOLA",
  "BONJOUR",
  "HALLO",
  "CIAO",
  "HEJ",
  "PRIVET",
  "NIHAO",
  "NAMASTE",
];
export const title = titles[Math.floor(Math.random() * titles.length)];

export const contentMap = {
  'ABOUT': {
    image : hangingImg,
    content : (
        `Hello! I am a computer science researcher with a keen interest in exploring patterns across diverse fields like mathematics, music, and philosophy.
        Delving into the intricacies of these subjects, seeking connections and insights that enrich our understanding of the world.
        Currently I run a YouTube Channel and Twitter Blog where I share captivating content that showcases the beauty of patterns and their relevance in our lives.
        Working on deep learning projects, Exploring the potential of this technology to further unravel the patterns.
        `
    )
  },
  'BLOG': {
    image : house,
    content : (
        `Here is the link to my blog if you are interested. This is based on X (Former Twitter) and my username is @RecurrentRabbit`
    )
  },
  'YOUTUBE': {
    image : garden,
    content : (
        `For Intriguing content on beauty of patterns, subscribe 'Abstrakt' on YouTube.`
    )
  },
  'GRAM': {
    image : hangingImg,
    content : (
        `Sorry no gramming for now :(`
    )
  },
  'GITHUB': {
    image : library,
    content: (
        `Have a look at my CompSci projects.`
    )
  },
};
