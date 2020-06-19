import React from 'react';
import './styles/main.css';


import StreamName from './Components/StreamName'
import Stream from './Components/Stream'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <StreamName name='Stream'/>
      <Footer/>
      {/* <Stream/> */}
    </div>
  );
}

export default App;
