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
              <b>Name:</b> {fish.name['name-EUen']}
            </div>
            <div>
              <b>Id:</b> {fish.id}
            </div>
            <div>
              <b>All day:</b> {printAsYesOrNo(fish.availability.isAllDay)}
            </div>
            <div>
              <b>All year:</b> {printAsYesOrNo(fish.availability.isAllYear)}
            </div>
            <div>
              <b>Southern Hemisphere Months:</b> {printAsMonthRange(fish.availability['month-array-southern'])}
            </div>
            <div>
              <b>Northern Hemisphere Months:</b> {printAsMonthRange(fish.availability['month-array-northern'])}
            </div>
            <div>
              <b>Location:</b> {fish.availability.location}
            </div>
            <div>
              <b>Time:</b> {fish.availability.time}
            </div>
            <div>
              <b>Shadow:</b> {fish.shadow}
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

export default FishCard;
