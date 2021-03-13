import React from 'react';
import styles from './FishGuide.module.css';
import GetFishService from '../../services/getFishService';
import FishCards from '../FishCards/FishCards';

const FishGuide: React.FC<{}> = () => {

  const service = GetFishService();

  return (
    < div className={styles.FishGuide} data-testid="FishGuide" >
      <main>
        <div>
          <h3>Fish Guide</h3>
          <h5>Fish availiable this month</h5>
        </div>
        <div>
          {service.status === 'loading' && (
            <div className="loader-container">
              <div>Loading</div>
            </div>
          )}
          {
            service.status === 'loaded'
            && !!service.payload
            && (<FishCards fishes={service.payload} />)
          }
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
