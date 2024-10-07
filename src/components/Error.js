import React from 'react';
import './Error.css';

function Error({ message }) {
  return <div className="error">{message}</div>;
}

export default Error;
