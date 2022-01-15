import React, { useEffect } from 'react';
import './App.css'



function App() {



  return (
    <div className='container'>
      <div className='counter'>12</div>
      <div className="control">
        <button className='button decrement-button' onClick={() => { }}>
          Decrement
        </button>
        <button className='button increment-button' onClick={() => { }}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
