import React from 'react';
import styles from './FishGuide.module.css';
import GetFishService from '../../services/getFishService';
import FishCard from '../FishCard/FishCard';
import { Theme, useTheme } from '../../context/ThemeContext';

const FishGuide: React.FC<{}> = () => {

  const service = GetFishService();

  const { theme } = useTheme();
  const OFFSET = 1;
  const currMonth = new Date().getMonth() + OFFSET;

  return (
    < div className={styles.FishGuide} data-testid="FishGuide" >
      <main>
        <div>
          <h3>Fish Guide</h3>
        </div>
        <div>
          {service.status === 'loading' && (
            <div className="loader-container">
              <div>Loading</div>
            </div>
          )}
          {service.status === 'loaded'
            && service.payload?.filter(fish => fish.availability.isAllYear === false)
              .filter(fish => {
                if (theme === Theme.North) {
                  return fish.availability['month-array-northern'].includes(currMonth)
                } else {
                  return fish.availability['month-array-southern'].includes(currMonth)
                }
              })
              .map(fish => (
                <div className="fish-item">
                  <FishCard fishprop={fish} />
                </div>
              ))}
          {service.status === 'loaded' && !service.payload && (
            <div>Error empty array returned</div>
          )}
          {service.status === 'error' && (
            <div>Oh no, error in calling endpoint</div>
          )}
        </div>
      </main>
    </div >
  );
}

export default FishGuide;
