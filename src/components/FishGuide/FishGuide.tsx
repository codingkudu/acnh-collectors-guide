import React from 'react';
import styles from './FishGuide.module.css';
import GetFishService from '../../services/getFishService';
import FishCards from '../FishCards/FishCards';

const FishGuide: React.FC<{}> = () => {

  const fishService = GetFishService();

  return (
    < div className={styles.FishGuide} data-testid="FishGuide" >
      <main>
        <div>
          <h3>Fish Guide</h3>
          <h5>Fish availiable this month</h5>
        </div>
        <div>
          {fishService.status === 'loading' && (
            <div className="loader-container">
              <div>Loading</div>
            </div>
          )}
          {
            fishService.status === 'loaded'
            && !!fishService.payload
            && (<FishCards fishes={fishService.payload} />)
          }
          {fishService.status === 'loaded' && !fishService.payload && (
            <div>Error empty array returned</div>
          )}
          {fishService.status === 'error' && (
            <div>Oh no, error in calling endpoint</div>
          )}
        </div>
      </main>
    </div >
  );
}

export default FishGuide;
