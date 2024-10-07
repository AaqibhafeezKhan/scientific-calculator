import React from 'react';
import './Memory.css';

function Memory({ addToMemory, subtractFromMemory, recallMemory, clearMemory }) {
  return (
    <div className="memory">
      <button onClick={addToMemory}>M+</button>
      <button onClick={subtractFromMemory}>M-</button>
      <button onClick={recallMemory}>MR</button>
      <button onClick={clearMemory}>MC</button>
    </div>
  );
}

export default Memory;
