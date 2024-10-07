import React from 'react';
import './History.css';

function History({ history }) {
  return (
    <div className="history">
      <h2>History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.input} = {item.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
