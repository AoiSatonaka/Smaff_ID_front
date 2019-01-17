import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={First} />
    <Route path='/second' component={Second} />
    <Route path='/hoge' component={Third} />
  </BrowserRouter>
);

const First = () => (
  <h1>first</h1>
);

const Second = () => (
  <h1>second</h1>
);

const Third = () => (
  <h1>third</h1>
);

export default App;