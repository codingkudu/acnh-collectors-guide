import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fish } from '../../types/Fish';
import styles from './FishCard.module.css';

interface IFishCardProps {
  fishprop: Fish
}

const FishCard: React.FC<IFishCardProps> = ({ fishprop: fish }: IFishCardProps) => {
  return (
    <div className={styles.FishCard} data-testid="FishCard">
      <Container>
        <Row className={styles.row}>
          <Col>
            <img src={fish.icon_uri} alt={fish.name['name-EUen']}></img>
          </Col>
          <Col className={styles.details}>
            <div>
              Name: {fish.name['name-EUen']}
            </div>
            <div>
              Id: {fish.id}
            </div>
            <div>
              All day: {fish.availability.isAllDay.toString()}
            </div>
            <div>
              All year: {fish.availability.isAllYear.toString()}
            </div>
            <div>
              Southern Hemisphere Months: {fish.availability['month-array-southern'].join(",")}
            </div>
            <div>
              Northern Hemisphere Months: {fish.availability['month-array-northern'].join(",")}
            </div>
            <div>
              Location: {fish.availability.location}
            </div>
            <div>
              Time: {fish.availability.time}
            </div>
            <div>
              Shadow: {fish.shadow}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FishCard;
