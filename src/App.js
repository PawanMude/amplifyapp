import React from 'react';
import logo from './logo.svg';
import './App.css';

const abc = 111 - 1; 
console.log(abc);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
    <h1>JavaScript is fun, but so is HTML & CSS!</h1>
    <p class="first">
      Started Learnig 
      <a href="https://www.thisyearforsure.com/"> here </a>.
    </p>

    <h2>Another heading</h2>
    <p class="second">
      Just another paragraph
    </p>

    <img
      id="course-image"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    />

    <form id="your-name">
      <h2>Your name here</h2>
      <p class="first">Please fill in this form :)</p>

      <input type="text" placeholder="Your name" />
      <button>OK!</button>
    </form>
        
        {abc}
      </header>
    </div>
  );
}

export default App;