import React from 'react';
import { ButtonGroup, Row, Container, ToggleButton } from 'react-bootstrap';
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
    <div className={styles.Settings} data-testid="Settings">
      <Container>
        <Row>
          <h4>Month: {formatter.format(new Date())}</h4>
        </Row>
      </Container>
      <Container>
        <Row>
          <b className={styles.header}>Hemisphere:</b>
          <ButtonGroup toggle>
            {hemisphereRadios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={theme.hemisphere === radio.value}
                onChange={() => setTheme({ hemisphere: radio.value, featureCarousel: theme.featureCarousel })}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Row>
        <Row>
          <b className={styles.header}>Feat. toggle Carousel:</b>
          <ButtonGroup toggle>
            {carsouelRadios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={theme.featureCarousel.toString() === radio.value}
                onChange={() => setTheme({ hemisphere: theme.hemisphere, featureCarousel: radio.value === 'true' })}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
