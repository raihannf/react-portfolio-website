import React from "react";
import ScrollToHashElement from "./components/scrollToHashElement";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <ScrollToHashElement />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
