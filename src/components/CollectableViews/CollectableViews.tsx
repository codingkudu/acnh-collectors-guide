import React, { FC } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { CollectionType } from "../../constants/CollectionType";
import About from '../About/About';
import CollectableGuide from '../CollectableGuide/CollectableGuide';
import styles from './CollectableViews.module.css';

interface CollectableViewsProps {}

const CollectableViews: FC<CollectableViewsProps> = () => {

  return (
    <div className={styles.CollectableViews} data-testid="CollectableViews">
      <div>
        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3" fill>
          <Tab eventKey="about" title="About">
            <About />
          </Tab>
          <Tab eventKey="fish" title="Fish">
            <CollectableGuide endpoint = {CollectionType.Fish}/>
          </Tab>
          <Tab eventKey="bugs" title="Bugs">
              <CollectableGuide endpoint = {CollectionType.Bugs}/>
          </Tab>
          <Tab eventKey="sea" title="Sea Creatures">
            <CollectableGuide endpoint = {CollectionType.SeaCreatures}/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CollectableViews;
