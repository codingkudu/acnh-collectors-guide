import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectableCard from './CollectableCard';
import { CollectableFactory } from '../../utils/collectable.factory';

describe('<CollectableCard />', () => {

  test('it should mount', () => {
    const newData = CollectableFactory.build();
    render(<CollectableCard collectable={newData} />);
    
    const collectableCard = screen.getByTestId('CollectableCard');

    expect(collectableCard).toBeInTheDocument();
  });

  test.each([
    ['CollectableImage', null],
    ['CollectableName', 'Name: Spider Monkey'],
    ['CollectableId', 'Id: 1'],
    ['CollectableAllDay', 'All day: Yes'],
    ['CollectableAllYear', 'All year: No'],
    ['CollectableSouth', 'Southern Hemisphere Months: Jul-Dec'],
    ['CollectableNorth', 'Northern Hemisphere Months: Jan-Jun'],
    ['CollectableLocation', 'Location: Tree'],
    ['CollectableTime', 'Time: 9am - 4pm'],
  ])('it display details of collectable for Test Id %s with text %s', (customAttribute, expectedText) => {

    const newData = CollectableFactory.build(
      {
        id: 1,
        'file-name': 'Spider Monkey',
        name: {'name-EUen': 'Spider Monkey'},
        availability: {
            isAllDay: true,
            isAllYear: false,
            location: 'Tree', 
            'month-array-northern': [1,2,3,4,5,6],
            'month-array-southern': [7,8,9,10,11,12],
            time: '9am - 4pm', 
        },
        icon_uri: 'http://urlstring.com'
      }
    );

    render(<CollectableCard collectable={newData} />);

    expect(screen.getByTestId(customAttribute)).toBeInTheDocument();
    if (expectedText) {
      expect(screen.getByTestId(customAttribute).textContent).toContain(expectedText);  
    }
  });
});