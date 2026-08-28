import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the blog box', () => {
  render(<App />);
  const boxElement = screen.getByRole('region', {
    name: /area principal do blog/i,
  });
  expect(boxElement).toBeInTheDocument();
});
