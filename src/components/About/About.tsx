import React, { FC } from 'react';
import styles from './About.module.css';

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className={styles.About} data-testid="About">
      <h1>Welcome to ACNH: Collectors Guide</h1>
      <p>Are you a Completionist gamer? Need to scratch that itch of getting a complete set?</p>
      <p>This is the place to find out where to complete you ACNH collections. Just use the toggle buttons above to select you hemisphere and style of layout.</p>
      <p>Happy collecting! 😍</p>
    </div>
  );
}

export default About;
