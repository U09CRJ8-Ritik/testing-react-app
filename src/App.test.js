import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {

  render(<App />);

  const nameInput = screen.getByRole('textbox',
    { name: /name/i });

  const emailInput = screen.getByRole('textbox',
    { name: /email/i });

  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('aman')

  user.click(emailInput);;
  user.keyboard('aman@gmail.com');

  user.click(button);

  const name = screen.getByRole('cell', { name: 'aman' });
  const email = screen.getByRole('cell', { name: 'aman@gmail.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();


});
