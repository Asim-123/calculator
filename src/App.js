import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
  const [lastOperator, setLastOperator] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [result, setResult] = useState(null);

  const handleNumber = (number) => {
    if (shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
      setWaitingForOperand(false);
    } else {
      if (display === '0' && number !== '.') {
        setDisplay(number);
      } else if (display === '-0' && number !== '.') {
        setDisplay('-' + number);
      } else {
        setDisplay(display + number);
      }
    }
  };

  const handleOperator = (operator) => {
    if (shouldResetDisplay && result !== null) {
      setEquation(result + ' ' + operator + ' ');
      setShouldResetDisplay(false);
      setDisplay(operator === '-' ? '-' : '');
      setLastOperator(operator);
      setWaitingForOperand(true);
      setResult(null);
      return;
    }
  
    if (display === '-') return;
  
    if (waitingForOperand) {
      if (operator === '-' && lastOperator !== '-') {
        setEquation(equation + operator);
        setDisplay('-');
        setLastOperator(operator);
        setShouldResetDisplay(false);
        setWaitingForOperand(false);
      } else {
        let newEq = equation.replace(/[\+\-\*/]+$/, '') + operator;
        setEquation(newEq + ' ');
        setLastOperator(operator);
        setShouldResetDisplay(true);
        setWaitingForOperand(true);
      }
      return;
    }
  
    setEquation(equation + display + ' ' + operator + ' ');
    setLastOperator(operator);
    setShouldResetDisplay(true);
    setWaitingForOperand(true);
  };
  
  const handleEquals = () => {
    let evalEquation = equation;
    if (!shouldResetDisplay) {
      evalEquation += display;
    } else if (result !== null) {
      evalEquation = result;
    }
    try {
      // Replace any accidental double operators except for negative numbers
      const sanitized = evalEquation.replace(/--/g, '+');
      const calculatedResult = Function('"use strict"; return (' + sanitized + ')')();
      const roundedResult = Math.round(calculatedResult * 1000000) / 1000000; // 6 decimal places precision
      setDisplay(String(roundedResult));
      setResult(String(roundedResult));
      setEquation('');
      setShouldResetDisplay(true);
      setLastOperator('');
      setWaitingForOperand(false);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setShouldResetDisplay(true);
      setLastOperator('');
      setWaitingForOperand(false);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
    setShouldResetDisplay(false);
    setLastOperator('');
    setWaitingForOperand(false);
    setResult(null);
  };

  const handleDecimal = () => {
    if (shouldResetDisplay) {
      setDisplay('0.');
      setShouldResetDisplay(false);
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="display">
          {display}
        </div>
        <div className="buttons">
          <button id="clear" onClick={handleClear} className="clear">
            AC
          </button>
          <button id="divide" onClick={() => handleOperator('/')} className="operator">
            ÷
          </button>
          <button id="seven" onClick={() => handleNumber('7')} className="number">
            7
          </button>
          <button id="eight" onClick={() => handleNumber('8')} className="number">
            8
          </button>
          <button id="nine" onClick={() => handleNumber('9')} className="number">
            9
          </button>
          <button id="multiply" onClick={() => handleOperator('*')} className="operator">
            ×
          </button>
          <button id="four" onClick={() => handleNumber('4')} className="number">
            4
          </button>
          <button id="five" onClick={() => handleNumber('5')} className="number">
            5
          </button>
          <button id="six" onClick={() => handleNumber('6')} className="number">
            6
          </button>
          <button id="subtract" onClick={() => handleOperator('-')} className="operator">
            -
          </button>
          <button id="one" onClick={() => handleNumber('1')} className="number">
            1
          </button>
          <button id="two" onClick={() => handleNumber('2')} className="number">
            2
          </button>
          <button id="three" onClick={() => handleNumber('3')} className="number">
            3
          </button>
          <button id="add" onClick={() => handleOperator('+')} className="operator">
            +
          </button>
          <button id="zero" onClick={() => handleNumber('0')} className="number zero">
            0
          </button>
          <button id="decimal" onClick={handleDecimal} className="number">
            .
          </button>
          <button id="equals" onClick={handleEquals} className="equals">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
