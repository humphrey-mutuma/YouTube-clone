import React from "react";
import "./RecommendedVideos.css";
import RecommendedVideosShortcut from "./RecommendedVideosShortcut/RecommendedVideosShortcut";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import IconButton from "@material-ui/core/IconButton";
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
      <section className="recommendedVideos__videos"></section>
    </main>
  );
};

export default RecommendedVideos;
