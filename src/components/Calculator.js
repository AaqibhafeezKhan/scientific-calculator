import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './Display';
import Button from './Button';
import History from './History';
import Memory from './Memory';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(0);
  
  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      const res = evaluate(input);
      setResult(res);
      setHistory([...history, { input, result: res }]);
    } catch {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const addToMemory = () => {
    setMemory(memory + evaluate(input));
  };

  const subtractFromMemory = () => {
    setMemory(memory - evaluate(input));
  };

  const recallMemory = () => {
    setInput(input + memory);
  };

  const clearMemory = () => {
    setMemory(0);
  };

  return (
    <div className="calculator-container">
      <Display input={input} result={result} />
      <div className="buttons-grid">
        {/* Buttons for operations and numbers */}
        <Button label="7" onClick={() => handleButtonClick('7')} />
        <Button label="8" onClick={() => handleButtonClick('8')} />
        <Button label="9" onClick={() => handleButtonClick('9')} />
        <Button label="/" onClick={() => handleButtonClick('/')} />
        <Button label="4" onClick={() => handleButtonClick('4')} />
        <Button label="5" onClick={() => handleButtonClick('5')} />
        <Button label="6" onClick={() => handleButtonClick('6')} />
        <Button label="*" onClick={() => handleButtonClick('*')} />
        <Button label="1" onClick={() => handleButtonClick('1')} />
        <Button label="2" onClick={() => handleButtonClick('2')} />
        <Button label="3" onClick={() => handleButtonClick('3')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="0" onClick={() => handleButtonClick('0')} />
        <Button label="." onClick={() => handleButtonClick('.')} />
        <Button label="=" onClick={calculateResult} />
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="C" onClick={clear} />
      </div>
      <Memory
        addToMemory={addToMemory}
        subtractFromMemory={subtractFromMemory}
        recallMemory={recallMemory}
        clearMemory={clearMemory}
      />
      <History history={history} />
    </div>
  );
}

export default Calculator;
