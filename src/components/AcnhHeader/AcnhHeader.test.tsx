import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AcnhHeader from './AcnhHeader';

describe('<AcnhHeader />', () => {
  test('it should mount', () => {
    render(<AcnhHeader />);
    
    const acnhHeader = screen.getByTestId('AcnhHeader');

    expect(acnhHeader).toBeInTheDocument();
  });
});