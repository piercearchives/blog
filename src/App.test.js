import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the blog box', () => {
  render(<App />);
  const boxElement = document.querySelector('.box');
  expect(boxElement).toBeInTheDocument();
});
