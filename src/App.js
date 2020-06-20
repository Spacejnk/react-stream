import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './styles/main.css';

import Stream from './Components/Stream'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'


function App() {
  return (
    <div>

    <Router>
     <Header/>

    <div className="p-3">
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>

      <Footer/>
      {/* <Stream/> */}
      </Router>

    </div>
  );
}

export default App;
