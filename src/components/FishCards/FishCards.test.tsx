import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishCards from './FishCards';
import testData from "./resources/fishes.json";

describe('<FishCards />', () => {
  test('it should mount', () => {
    render(<FishCards fishes={testData} />);

    const fishCards = screen.getByTestId('FishCards');

    expect(fishCards).toBeInTheDocument();
  });
});