import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectableGuide from './CollectableGuide';

describe('<CollectableGuide />', () => {
  test('it should mount', () => {
    render(<CollectableGuide endpoint={'fish'} />);
    
    const collectableGuide = screen.getByTestId('CollectableGuide');

    expect(collectableGuide).toBeInTheDocument();
  });
});