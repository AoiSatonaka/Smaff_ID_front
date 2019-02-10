import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Home from './pages/home.jsx';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      {/*<Route path="/login" component={Auth}/>*/}
      <Route path='/second' component={Second} />
      <Route path='/hoge' component={Third} />
    </div>
  </BrowserRouter>
);

// const First = () => (
//   <h1>first</h1>
// );

const Second = () => (
  <h1>second</h1>
);

const Third = () => (
  <h1>third</h1>
);

export default App;