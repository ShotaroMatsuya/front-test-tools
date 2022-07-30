import React, { useState } from 'react';

const Button = () => {
  const [text, setText] = useState('');

  return (
    <button data-cy="button" onClick={() => setText('Loading...')}>
      {text || 'Click me'}
    </button>
  );
};

export default Button;
