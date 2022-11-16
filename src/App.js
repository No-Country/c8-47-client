import React from "react"
import { Nav } from "./Layouts/Header/Header";
import { Banner } from "./Components/Banner/Banner";
import { FeatureList } from "./Components/Feature /FeatureList";
import { Footer } from "./Layouts/Footer/Footer";
import { Paragraph } from "./Components/Feature /Paragraph";

import './App.css';


function App() {
  return (
    <div className="App ">
    <Nav />
    <Banner />
    <FeatureList />
    <Paragraph />
    <Footer />
    </div>
  );
}

export default App;
