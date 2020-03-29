import React from 'react'

import { Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage';
import About from './containers/About';
import BookLesson from './containers/BookLesson';
import Contact from './containers/Contact';
import Tutorials from './containers/Tutorials'

const Router = () => {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/book-lesson" component={BookLesson} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
}

export default Router