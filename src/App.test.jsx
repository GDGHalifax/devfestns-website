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

  it('handles Become a Sponsor button click', () => {
    // Mock window.location.href
    const originalLocation = window.location;
    delete window.location;
    window.location = { href: '' };

    render(<App />);
    const sponsorButton = screen.getByText(/Become a Sponsor/i);
    sponsorButton.click();

    expect(window.location.href).toBe('mailto:gdghalifax@gmail.com');

    // Restore window.location
    window.location = originalLocation;
  });
});
