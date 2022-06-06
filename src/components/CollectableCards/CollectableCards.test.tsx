import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectableCards from './CollectableCards';
import { data } from '../../resources/fish';

describe('<CollectableCards />', () => {
  test('it should mount', () => {
    render(<CollectableCards collectableType={''} collectables={data} />);
    
    const collectableCards = screen.getByTestId('CollectableCards');

    expect(collectableCards).toBeInTheDocument();
  });
});