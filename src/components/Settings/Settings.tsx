import React from 'react';
import { ButtonGroup, Row, Container, ToggleButton } from 'react-bootstrap';
import styles from './Settings.module.css';
import { Theme, useTheme } from '../../context/ThemeContext';

interface Props {
}

const Settings: React.FC<Props> = () => {

  const formatter = new Intl.DateTimeFormat('en', { month: 'long' });

  // Context API
  const { theme, setTheme } = useTheme();
  const radios = [
    { name: 'North', value: Theme.North },
    { name: 'South', value: Theme.South },
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
          <h4 className={styles.h4}>Hemisphere:</h4>
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="secondary"
                name="radio"
                value={radio.value}
                checked={theme === radio.value}
                onChange={() => setTheme(radio.value)}
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
