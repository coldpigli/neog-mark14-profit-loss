import React, { useState } from 'react';
import Alert from './Alert';
function App() {
  
  const[initialRate, setInitialRate] = useState();
  const[quantity, setQuantity] = useState();
  const[currentRate, setCurrentRate] = useState();
  const[alertMessage, setAlertMessage] = useState('');
  const[gifSelect, setGifSelect] = useState('');
  

  const calculateProfit = () => {
    let profitPerShare = Number(currentRate) - Number(initialRate);
    let profit = profitPerShare * Number(quantity);
    let profitPercentage = (profitPerShare/initialRate) * 100;
    setAlertMessage("To the moon!! You made a profit of "+ profitPercentage + "% evaluating to "+ profit);
    setGifSelect('profit');
  }

  const calculateLoss = () => {
    let lossPerShare = Number(initialRate) - Number(currentRate);
    let loss = lossPerShare * Number(quantity);
    let lossPercentage = (lossPerShare/initialRate) * 100;
    setAlertMessage("Sorry!! You made a loss of "+ lossPercentage + "% evaluating to "+ loss);
    setGifSelect('loss');
  }

  const calculateResult = () => {
    if(Number(initialRate)===Number(currentRate)){
      setAlertMessage("You're breaking even!");
      setGifSelect('even');
    }
    if(Number(initialRate)<Number(currentRate)){
      calculateProfit();
    }
    if(Number(initialRate)>Number(currentRate)){
      calculateLoss();
    }
  }


  
  return (
    <div className = "container">
    <h1>Keep an Eye on Your Investments!</h1>
    <label htmlFor="initialPrice">Initial Price</label>
    <input id = "initialPrice" type = "number" placeholder="Enter initial stock price here"
     onChange = {(e)=>{setInitialRate(e.target.value)}}></input>
    <br/>
    <label htmlFor="quantity">Enter number of stocks</label>
    <input id = "quantity" type = "number" placeholder="Enter the number of stocks"
    onChange = {(e)=>{setQuantity(e.target.value)}}></input>
    <br/>
    <label htmlFor="currentPrice">Current Price</label>
    <input id = "currentPrice" type = "number" placeholder="Enter the current price here"
    onChange = {(e)=>{setCurrentRate(e.target.value)}}></input>
    <br/>
    <div>
      {alertMessage}
      <br/>
      <br/>
      <Alert gifSelect={gifSelect}/>
    </div>
    <button onClick = {calculateResult} >Calculate</button>
  </div>
    )
}

export default App;
