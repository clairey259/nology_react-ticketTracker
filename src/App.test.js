import { render, screen } from '@testing-library/react';
import App from './App';

xdescribe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug()
  });


});