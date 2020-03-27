import React from "react";

import './App.scss'
import MainHeader from "./MainHeader"
import Router from "./Router"
import Footer from "./Footer";

const App = () => {
    return (
      <>
        <MainHeader />
        <div className="big-container">
          <Router />
        </div>
        <Footer />
      </>
    );
}

export default App
