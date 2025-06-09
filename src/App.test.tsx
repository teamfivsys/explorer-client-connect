import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders login form', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const usernameLabel = screen.getByText(/Username/i);
  expect(usernameLabel).toBeInTheDocument();
});