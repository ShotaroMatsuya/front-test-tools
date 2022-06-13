import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [buttonEnabled, setButtonEnabled] = useState(true);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonEnabled ? buttonColor : 'gray' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={!buttonEnabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={!buttonEnabled}
        aria-checked={!buttonEnabled}
        onChange={e => setButtonEnabled(!e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
