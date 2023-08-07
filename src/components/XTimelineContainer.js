import React, { useEffect } from "react";

const XTimelineContainer = () => {
  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-theme", "dark");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", "https://twitter.com/thetesselwolf");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
      <a class="twitter-timeline" data-width="700" data-theme="light" href="https://twitter.com/thetesselwolf?ref_src=twsrc%5Etfw">Tweets by thetesselwolf</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </section>
  );
};

export default XTimelineContainer;