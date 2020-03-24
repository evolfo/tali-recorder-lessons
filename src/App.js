import React from "react";

import './App.scss'
import MainHeader from "./MainHeader"
import Router from "./Router"
import Footer from "./Footer";

const App = () => {
    return (
      <>
        <MainHeader />
        <Router />
        <Footer />
      </>
    );
}

export default App
