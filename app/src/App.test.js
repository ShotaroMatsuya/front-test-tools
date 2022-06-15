import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
  // click button 
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  // expect the button text to be ''Change to red'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });
  expect(colorButton).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('when checkbox is checked, button should be disabled', () => {
  render(<App />);
  // Arrange
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  // Act & Assert -1-
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  // Act & Assert -2-
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);
  // Arrange
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });
  const checkbox = screen.getByRole('checkbox', {
    name: 'Disable button'
  });
  // Act & Assert (disable button)
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  // (re-enable button)
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  // arrange
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  });
  // act & assert
  // change button & disable button
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });
  // re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
