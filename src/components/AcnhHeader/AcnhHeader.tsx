import React from 'react';
import { Navbar } from 'react-bootstrap';
import styles from './AcnhHeader.module.css';

const AcnhHeader: React.FC = () => (
  <div className={styles.AcnhHeader} data-testid="AcnhHeader">
    <Navbar className={styles.nav} bg="success" variant="dark" expand="lg">
      <Navbar.Brand href="#home">ACNH: Collectors Guide</Navbar.Brand>
    </Navbar>
  </div>
);

export default AcnhHeader;
