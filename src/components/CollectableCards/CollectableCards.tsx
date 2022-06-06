import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import { CollectionType } from '../../constants/CollectionType';
import { Hemisphere, useTheme } from '../../context/ThemeContext';
import { Collectable } from '../../types/Collectable';
import CollectableCard from '../CollectableCard/CollectableCard';
import styles from './CollectableCards.module.css';

interface CollectableCardsProps {
  collectableType: string,
  collectables: Collectable[]
}

const CollectableCards: FC<CollectableCardsProps> = ({ collectableType, collectables }: CollectableCardsProps) => {
  const { themes: theme } = useTheme();

  const OFFSET = 1;
  const currMonth = new Date().getMonth() + OFFSET;

  const filteredCollectables = collectables.filter(collectable => collectable.availability.isAllYear === false)
    .filter(collectable => {
      if (theme.hemisphere === Hemisphere.North) {
        return collectable.availability['month-array-northern'].includes(currMonth)
      } else {
        return collectable.availability['month-array-southern'].includes(currMonth)
      }
    });

    let featureSwitch;

    if (theme.featureCarousel && filteredCollectables.length > 0) {
      featureSwitch =
        <div>
          <b>Swipe LEFT ⬅ or RIGHT ➡ to see next {label(collectableType)}</b>
          <Carousel>
            {filteredCollectables.map(collectable => (
              <Carousel.Item>
                <CollectableCard collectable={collectable} />
              </Carousel.Item>))}
          </Carousel>
        </div>
    } else {
      featureSwitch =
        <div>
          <b>Swipe UP ⬆ or DOWN ⬇ to see {label(collectableType)}</b>
          {filteredCollectables.map((collectable, index) => (
            <div className="collectable-item" key={index}>
              <CollectableCard collectable={collectable} />
            </div>)
          )}
        </div >
    }
  
  return (
    <div className={styles.CollectableCards} data-testid="CollectableCards">
      {featureSwitch}
    </div>
  );
}

function label(value: string): string {
  if (value === CollectionType.Fish) return 'fish';
  else if (value === CollectionType.Bugs) return 'bug';
  else if (value === CollectionType.SeaCreatures) return 'sea creature';
  else return value;
}

export default CollectableCards;
