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
        <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3" fill data-testid="tabs">
          <Tab eventKey="about" title="About" data-testid="about-tab">
            <About />
          </Tab>
          <Tab eventKey="fish" title="Fish" data-testid="fish-tab">
            <CollectableGuide endpoint = {CollectionType.Fish}/>
          </Tab>
          <Tab eventKey="bugs" title="Bugs" data-testid="bug-tab">
              <CollectableGuide endpoint = {CollectionType.Bugs} />
          </Tab>
          <Tab eventKey="sea" title="Sea Creatures" data-testid="sea-tab">
            <CollectableGuide endpoint = {CollectionType.SeaCreatures}/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CollectableViews;
