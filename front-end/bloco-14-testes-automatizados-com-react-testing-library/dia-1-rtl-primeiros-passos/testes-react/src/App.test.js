
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});
test('Verificando se existe o campo Enviar', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument(); 

});
test('Verificando se existe um botão', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: /enviar/i })
  expect(btn).toBeInTheDocument();
});