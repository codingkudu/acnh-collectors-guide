import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <div className={styles.Footer} data-testid="Footer">
    <footer>
      <a
        className="App-link"
        href="https://github.com/codingkudu/codingkudu"
        target="_blank"
        rel="noopener noreferrer"
      >
        CodingKudu on github
        </a>
    </footer>
  </div>
);

export default Footer;
