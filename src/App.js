import React, { useState } from 'react'
import './Clear.css';

function App() {
  const [result, setResult] = useState("")
  const [equation, setEquation] = useState("")


  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
    setEquation(equation.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
    setEquation("")
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1)) // ou somente -1
    setEquation(equation.slice(0, equation.length - 1))
  }

  const calculate = () => {
    
    try {
      setResult(eval(result).toString())

    } catch (err) {
      setResult("ERRO!")
    }

  }

  return (
    <div className="App">


      <div className="general-container">


        <div className={"displayEquation"}>
          <input type="text" disabled class="textEquation" value={equation} />
        </div>

        <div className={"displayResult"}>
          <input type="text" disabled class="textResult" value={result} />
        </div>
        

        <div className="container">
          

          <button className="logo"></button>
          <button className="item delete" onClick={clear} >AC</button>
          <button className="item backspace" onClick={backspace} >C</button>
          <button name="/" className="item share operations" onClick={handleClick}>/</button>

          <button name="7" className="item number seven" onClick={handleClick}>7</button>
          <button name="8" className="item number eight" onClick={handleClick}>8</button>
          <button name="9" className="item number nine" onClick={handleClick}>9</button>
          <button name="*" className="item multiply operations" onClick={handleClick}>x</button>

          <button name="4" className="item number four" onClick={handleClick}>4</button>
          <button name="5" className="item number five" onClick={handleClick}>5</button>
          <button name="6" className="item number six" onClick={handleClick}>6</button>
          <button name="-" className="item subtract operations" onClick={handleClick}>-</button>
          

          <button name="1" className="item number one" onClick={handleClick}>1</button>
          <button name="2" className="item number two" onClick={handleClick}>2</button>
          <button name="3" className="item number three" onClick={handleClick}>3</button>
          <button name="+" className="item add operations" onClick={handleClick}>+</button>

          <button name="0" className="item zero" onClick={handleClick}>0</button>
          <button name="." className="item number point ." onClick={handleClick}>.</button>
          <button className="item equal" onClick={calculate}>=</button>

        </div>

      </div>


    </div>
  );
}

export default App;
