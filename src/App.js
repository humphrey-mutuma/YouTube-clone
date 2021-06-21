import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app_body">
        <MenuBar />
        <RecommendedVideos />
      </main>
    </div>
  );
}

export default App;
