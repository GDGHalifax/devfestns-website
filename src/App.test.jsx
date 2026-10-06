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
  it('renders Google Maps link for non-Apple devices', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      configurable: true
    });
    render(<App />);
    const mapsLink = screen.getByText(/Volta, Halifax & Virtual/i).closest('a');
    expect(mapsLink).toHaveAttribute('href', 'https://maps.app.goo.gl/ZworZ4NuEP5fghMo6');
  });

  it('renders Apple Maps link for Apple devices', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
      configurable: true
    });
    render(<App />);
    const mapsLink = screen.getByText(/Volta, Halifax & Virtual/i).closest('a');
    expect(mapsLink).toHaveAttribute('href', 'https://maps.apple/p/6uG9ZR9Q7Y.8AQ');
  });
});
