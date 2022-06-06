import React, { FC } from 'react';
import { CollectionType } from "../../constants/CollectionType";
import useGetCollectablesService from '../../services/useGetCollectablesService';
import CollectableCards from '../CollectableCards/CollectableCards';
import styles from './CollectableGuide.module.css';

interface CollectableGuideProps {
  endpoint: string
}

const CollectableGuide: FC<CollectableGuideProps> = ({endpoint}: CollectableGuideProps) => {

  const collectables  = useGetCollectablesService(endpoint);
  
  return (
    <div className={styles.CollectableGuide} data-testid="CollectableGuide">
      <main>
        <div>
          <h3>{title(endpoint)} Guide</h3>
          <h5>{title(endpoint)} availiable this month</h5>
        </div>
        <div>
          {collectables.status === 'loading' && (
            <div className="loader-container">
              <div>Loading</div>
            </div>
          )}
          {
            collectables.status === 'loaded'
            && !!collectables.payload
            && (<CollectableCards collectableType={endpoint} collectables={collectables.payload} />)
          }
          {collectables.status === 'loaded' && !collectables.payload && (
            <div>Error empty array returned</div>
          )}
          {collectables.status === 'error' && (
            <div>Oh no, error in calling endpoint</div>
          )}
        </div>
      </main>
    </div>
  )
  
};


function title(value: string): string {
  if (value === CollectionType.Fish) return 'Fish';
  else if (value === CollectionType.Bugs) return 'Bugs';
  else if (value === CollectionType.SeaCreatures) return 'Sea Creatures';
  else return value;
}

export default CollectableGuide;
