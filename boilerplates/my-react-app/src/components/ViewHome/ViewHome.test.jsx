import React from 'react';
import { render, screen } from '@testing-library/react';

import ViewHome from './ViewHome';

describe('ViewHome', () => {
  test('renders properly', () => {
    render(<ViewHome />);
    const homeTitle = screen.getByText('You are at Home');
    expect(homeTitle).toBeInTheDocument();
  });
});
