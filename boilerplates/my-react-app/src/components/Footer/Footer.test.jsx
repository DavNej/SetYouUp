import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('renders properly', () => {
    render(<Footer />);
    const appName = screen.getByText(process.env.REACT_APP_NAME);
    expect(appName).toBeInTheDocument();
  });
});
