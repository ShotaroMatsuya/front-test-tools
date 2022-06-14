import{useState } from 'react' ;

import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [buttonEnabled, setButtonEnabled] = useState(true);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonEnabled ? buttonColor : 'gray' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={!buttonEnabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
