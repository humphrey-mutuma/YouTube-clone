import React from "react";
import "./RecommendedVideos.css";
import RecommendedVideosShortcut from "./RecommendedVideosShortcut/RecommendedVideosShortcut";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
import VideosCard from "./VideosCard/VideosCard";

const RecommendedVideos = () => {
  return (
    <main className="recommendedVideos">
      <header className="recommendedVideos__header">
        <IconButton className="KeyboardArrowLeftIcon">
          <KeyboardArrowLeftIcon />
        </IconButton>
        <RecommendedVideosShortcut title="All" />
        <RecommendedVideosShortcut title="Javascript" />
        <RecommendedVideosShortcut title="React" />
        <RecommendedVideosShortcut title="Playlists" />
        <RecommendedVideosShortcut title="Avicii" />
        <RecommendedVideosShortcut title="Football" />
        <RecommendedVideosShortcut title="IOS" />
        <RecommendedVideosShortcut title="Websites" />
        <RecommendedVideosShortcut title="Sports" />
        <RecommendedVideosShortcut title="Premier" />
        <RecommendedVideosShortcut title="Live" />
        <RecommendedVideosShortcut title="Kygo" />
        <RecommendedVideosShortcut title="Django" />
        <RecommendedVideosShortcut title="Python" />
        <RecommendedVideosShortcut title="Watched" />
        <RecommendedVideosShortcut title="Programming" />
        <RecommendedVideosShortcut title="React" />
        <RecommendedVideosShortcut title="Playlists" />
        <RecommendedVideosShortcut title="Avicii" />
        <RecommendedVideosShortcut title="Football" />
        <RecommendedVideosShortcut title="IOS" />
        <IconButton className="KeyboardArrowRightIcon">
          <KeyboardArrowRightIcon />
        </IconButton>
      </header>
      {/* them videos */}
      <section className="recommendedVideos__videos">
        <VideosCard
          thumbnail="https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif"
          title="Its freedom day 1st trailer"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Top Movies "
          isApproved
          views="252K"
          timestamp="2 hours"
        />
        <VideosCard
          thumbnail="https://media.giphy.com/media/3Nl5Co7cLUYDK/giphy.gif"
          title="Only for laughs, never serious."
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Best Memes"
          views="22K"
          timestamp="9 hours"
        />
        <VideosCard
          thumbnail="https://media.giphy.com/media/9lEGNc2hPkmevAciHq/giphy.gif"
          title="My Monday Morning routine "
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Crazy Kennar"
          isApproved={true}
          views="252K"
          timestamp="10 days"
        />
        <VideosCard
          thumbnail="https://media.giphy.com/media/L7GLtkwtkl13WoVfwg/giphy.gif"
          title="Back to school (why coding is my thing)"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Pro Programmer"
          isApproved={true}
          views="25K"
          timestamp="2 Months"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/05/28/11/39/girl-6290663__340.jpg"
          title="Why you can't code. (4 Inconvenient Truths)"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Code Guru"
          isApproved={true}
          views="252K"
          timestamp="2 mins"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/01/28/18/21/beach-5958718__340.jpg"
          title="Why you Should start deep learning."
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Deep Learning"
          isApproved={true}
          views="52K"
          timestamp="12 hours"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/05/02/15/05/desert-6223778__340.jpg"
          title="Why React is better than Angular"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="The Real dev"
          isApproved={true}
          views="22K"
          timestamp="9 mins"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          title="Why you can't code. (4 Inconvenient Truths)"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Clever Programmer"
          isApproved={true}
          views="252K"
          timestamp="9 hours"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2018/07/04/11/58/xiamen-3515964__340.jpg"
          title="Top frameworks to learn in 2021"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Top Programmer"
          isApproved={true}
          views="272K"
          timestamp="13 days"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/05/02/15/05/desert-6223778__340.jpg"
          title="Why you should start learning web dev"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Clever Developer"
          views="2K"
          timestamp="9 days"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          title="Vue is cool but React is cool"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Web dev"
          isApproved={true}
          views="112K"
          timestamp="18 hours"
        />
        <VideosCard
          thumbnail="https://cdn.pixabay.com/photo/2018/07/04/11/58/xiamen-3515964__340.jpg"
          title="The real deal about Vue js"
          src="https://cdn.pixabay.com/photo/2021/01/27/15/54/wedding-5955351__340.jpg"
          username="Simple developer"
          views="211K"
          timestamp="2 hours"
        />
      </section>
    </main>
  );
};

export default RecommendedVideos;
