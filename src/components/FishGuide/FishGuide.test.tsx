import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishGuide from './FishGuide';

describe('<FishGuide />', () => {
  test('it should mount', () => {
    render(<FishGuide />);
    
    const fishGuide = screen.getByTestId('FishGuide');

    expect(fishGuide).toBeInTheDocument();
  });
});