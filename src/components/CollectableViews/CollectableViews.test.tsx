import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectableViews from './CollectableViews';

describe('<CollectableViews />', () => {
  test('it should mount', () => {
    render(<CollectableViews />);
    
    const collectableViews = screen.getByTestId('CollectableViews');

    expect(collectableViews).toBeInTheDocument();
  });
});