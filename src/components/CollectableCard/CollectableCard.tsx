import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Collectable } from '../../types/Collectable';
import styles from './CollectableCard.module.css';

interface CollectableCardProps {
  collectable: Collectable
}

const CollectableCard: FC<CollectableCardProps> = ({collectable}: CollectableCardProps) => {
  return (
    <div className={styles.CollectableCard} data-testid="CollectableCard">
      <Container>
        <Row className={styles.row}>
          <Col>
            <img src={collectable.icon_uri} alt={collectable.name['name-EUen']}></img>
          </Col>
          <Col className={styles.details}>
            <div>
              <b>Name:</b> {collectable.name['name-EUen']}
            </div>
            <div>
              <b>Id:</b> {collectable.id}
            </div>
            <div>
              <b>All day:</b> {printAsYesOrNo(collectable.availability.isAllDay)}
            </div>
            <div>
              <b>All year:</b> {printAsYesOrNo(collectable.availability.isAllYear)}
            </div>
            <div>
              <b>Southern Hemisphere Months:</b> {printAsMonthRange(collectable.availability['month-array-southern'])}
            </div>
            <div>
              <b>Northern Hemisphere Months:</b> {printAsMonthRange(collectable.availability['month-array-northern'])}
            </div>
            <div>
              <b>Location:</b> {collectable.availability.location}
            </div>
            <div>
              <b>Time:</b> {collectable.availability.time}
            </div>
            <div>
              <b>Shadow:</b> {collectable.shadow}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function printAsYesOrNo(value: boolean): string {
  return value ? 'Yes' : 'No';
}

function printAsMonthRange(months: number[]): string {
  const mnths = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return mnths[months[0]] + '-' + mnths[months[months.length - 1]];
}

export default CollectableCard;
