import React from 'react'

import { Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage';
import About from './containers/About';
import BookLesson from './containers/BookLesson';

const Router = () => {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/book-lesson" component={BookLesson} />
      </Switch>
    );
}

export default Router