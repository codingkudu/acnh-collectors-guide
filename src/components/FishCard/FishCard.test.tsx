import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FishCard from './FishCard';
import { Fish } from '../../types/Fish';

describe('<FishCard />', () => {

  const fish: Fish = {
    id: 1,
    'file-name': 'Fish file name',
    name: { 'name-EUen': 'Fish name' },
    availability: { isAllDay: true, isAllYear: false, location: 'River', 'month-array-northern': [1, 2, 3], 'month-array-southern': [4, 5, 6], time: '9a,-3pm' },
    shadow: 'large',
    icon_uri: 'http://this.url'
  }

  test('it should mount', () => {
    render(<FishCard fishprop={fish} />);

    const fishCard = screen.getByTestId('FishCard');

    expect(fishCard).toBeInTheDocument();
  });
});