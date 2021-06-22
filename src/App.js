import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <main className="app_body">
        <section className="app__body--menubar">
          <MenuBar />
        </section>
        <section className="app__body--recommendedVideos">
          <RecommendedVideos />
        </section>
      </main>
    </div>
  );
}

export default App;
