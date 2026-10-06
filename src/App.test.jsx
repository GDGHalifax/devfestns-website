import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the DevFest title', () => {
    render(<App />);
    const titleElements = screen.getAllByText(/DevFest/i);
    expect(titleElements[0]).toBeInTheDocument();
  });

  it('renders the RSVP Now button', () => {
    render(<App />);
    const buttons = screen.getAllByText(/RSVP Now/i);
    expect(buttons.length).toBeGreaterThan(0);
  });
});
