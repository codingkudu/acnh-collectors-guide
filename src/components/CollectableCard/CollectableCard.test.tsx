import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectableCard from './CollectableCard';
import { data } from '../../resources/fish';

describe('<CollectableCard />', () => {
  test('it should mount', () => {
    render(<CollectableCard collectable={data[0]} />);
    
    const collectableCard = screen.getByTestId('CollectableCard');

    expect(collectableCard).toBeInTheDocument();
  });
});