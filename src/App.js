import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1> Saint Cloud Alterations</h1>
        <h2>Specializing in all types of alterations including leather.</h2>
         <h3>Nick<br></br>
         tailor/owner<br></br><br></br>
        
            5000 Spiral Way <br></br>
            Saint Cloud FL 34771 <br></br>
            407-535-5187
         </h3>
         <a
          className="App-link"
          href="https://www.google.com/maps/place/Saint+Cloud+Alterations/@28.3232536,-81.2388448,15z/data=!4m13!1m7!3m6!1s0x88dd8bc2ed156ee7:0x4e1a30d81a6bbb0a!2s5000+Spiral+Way,+St+Cloud,+FL+34771!3b1!8m2!3d28.3229623!4d-81.2389111!3m4!1s0x88dd8f7f1d15391f:0x524fd7736b2199d2!8m2!3d28.3229623!4d-81.2389111"
          
          target="_blank"
          rel="noopener noreferrer"
        >
          click here for map
        </a>
       
      </header>
    </div>
  );
}
}

export default App;
