import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './app';

describe('App', () => {
  it('is visible', () => {
    render(<App />);

    expect(screen.getByTestId('greeting')).toHaveTextContent('Yo, Ilshat!');
  });

  it('counts', async () => {
    render(<App />);

    expect(screen.getByTestId('count')).toHaveTextContent('0');

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});
