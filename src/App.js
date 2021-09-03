import React, { useState } from 'react';
function App() {
  
  
  return (
    <div className = "container">
    <h1>Keep an Eye on Your Investments!</h1>
    <label htmlFor="initialPrice">Initial Price</label>
    <input id = "initialPrice" type = "number" placeholder="Enter initial stock price here"></input>
    <br/>
    <label htmlFor="quantity">Enter number of stocks</label>
    <input id = "quantity" type = "number" placeholder="Enter the number of stocks"></input>
    <br/>
    <label htmlFor="currentPrice">Current Price</label>
    <input id = "currentPrice" type = "number" placeholder="Enter the current price here"></input>
    <br/>
    <div>
      Hey, You made a profit of xxxx. 
      <br/>
      <br/>
      <iframe src="https://giphy.com/embed/ef8i0ocApLTHE4IVxm" width="50" height="50" frameBorder="0" class="giphy-embed" allowFullScreen/>
    </div>
    <button >Calculate</button>
  </div>
    )
}

export default App;
