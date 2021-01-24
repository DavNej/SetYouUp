import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  test('renders properly', () => {
    render(<Header />);
    const appName = screen.getByText(process.env.REACT_APP_NAME);
    expect(appName).toBeInTheDocument();
  });
});
