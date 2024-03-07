import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
