import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Hemisphere, useTheme } from '../../context/ThemeContext';
import { Fish } from '../../types/Fish';
import FishCard from '../FishCard/FishCard';
import styles from './FishCards.module.css';

interface FishCardsProps {
  fishes: Fish[]
}

const FishCards: React.FC<FishCardsProps> = ({ fishes }: FishCardsProps) => {
  const { themes: theme } = useTheme();

  const OFFSET = 1;
  const currMonth = new Date().getMonth() + OFFSET;

  const filterFish = fishes.filter(fish => fish.availability.isAllYear === false)
    .filter(fish => {
      if (theme.hemisphere === Hemisphere.North) {
        return fish.availability['month-array-northern'].includes(currMonth)
      } else {
        return fish.availability['month-array-southern'].includes(currMonth)
      }
    });

  let featureSwitch;

  if (theme.featureCarousel && filterFish.length > 0) {
    featureSwitch =
      <div>
        <b>Swipe LEFT ⬅ or RIGHT ➡ to see next fish</b>
        <Carousel>
          {filterFish.map(fish => (
            <Carousel.Item>
              <FishCard fishprop={fish} />
            </Carousel.Item>))}
        </Carousel>
      </div>
  } else {
    featureSwitch =
      <div>
        <b>Swipe UP ⬆ or DOWN ⬇ to see fish</b>
        {filterFish.map((fish, index) => (
          <div className="fish-item" key={index}>
            <FishCard fishprop={fish} />
          </div>)
        )}
      </div >
  }

  return (
    <div className={styles.FishCards} data-testid="FishCards">
      {featureSwitch}
    </div>
  )
};

export default FishCards;
