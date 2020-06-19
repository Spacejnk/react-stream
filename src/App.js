import React from 'react';
import './styles/main.css';
import StreamName from './Components/StreamName'
import Stream from './Components/Stream'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <StreamName name='Stream'/>
      
     <Router>
     <ul>
        <li>
          <Link to="/" className="text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500">About</Link>
        </li>
      </ul>
     

      <Switch>
        <Route exact path="/">
          <h1 className="font-bold text-2xl">My home page</h1>
        </Route>
        <Route exact path="/about">
          <h1 className="font-bold text-2xl">About me</h1>
        </Route>
      </Switch>
      </Router>
      
      <Footer/>
      {/* <Stream/> */}
    </div>
  );
}

export default App;
