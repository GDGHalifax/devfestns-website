import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the DevFest title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DevFest/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the Apply to Speak button', () => {
    render(<App />);
    const buttons = screen.getAllByText(/Apply to Speak/i);
    expect(buttons.length).toBeGreaterThan(0);
  });
});
