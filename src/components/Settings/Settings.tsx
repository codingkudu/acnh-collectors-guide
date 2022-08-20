import React from 'react';
import { ButtonGroup, Row, Container, ToggleButton, Col } from 'react-bootstrap';
import styles from './Settings.module.css';
import { Hemisphere, useTheme } from '../../context/ThemeContext';

interface Props {
}

const Settings: React.FC<Props> = () => {

  const formatter = new Intl.DateTimeFormat('en', { month: 'long' });

  // Context API
  const { themes: theme, setTheme } = useTheme();
  const hemisphereRadios = [
    { name: 'North', value: Hemisphere.North },
    { name: 'South', value: Hemisphere.South },
  ];

  const carsouelRadios = [
    { name: 'On', value: 'true' },
    { name: 'Off', value: 'false' },
  ];

  return (
    <div data-testid="Settings">
      <Container>
        <Row>
          <h4>Month: {formatter.format(new Date())}</h4>
        </Row>
      </Container>
      <Container>
        <Row className={styles.row}>
          <Col sm={4}>
            <b className={styles.header}>Hemisphere:</b>
          </Col>
          <Col sm={8}>
            <ButtonGroup toggle className={styles.buttonGroupToggle}>  
              {hemisphereRadios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={theme.hemisphere === radio.value}
                  onChange={() => setTheme({ hemisphere: radio.value, featureCarousel: theme.featureCarousel })}
                  data-testid={'hemisphere-' + radio.name}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col sm={4}>
          <b className={styles.header}>Feature toggle Carousel:</b>
          </Col>
          <Col sm={8}>
            <ButtonGroup toggle className={styles.buttonGroupToggle}>
              {carsouelRadios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio.value}
                  checked={theme.featureCarousel.toString() === radio.value}
                  onChange={() => setTheme({ hemisphere: theme.hemisphere, featureCarousel: radio.value === 'true' })}
                  data-testid={'carousel-' + radio.name}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
