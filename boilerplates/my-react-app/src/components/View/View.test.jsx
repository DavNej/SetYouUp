import React from 'react';
import { render, screen } from '@testing-library/react';

import View from './View';

describe('View', () => {
  test('renders properly', () => {
    render(<View />);
    const viewTitle = screen.getByText('Welcome in View');
    expect(viewTitle).toBeInTheDocument();
  });
});
