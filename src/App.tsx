import React from 'react';
import './App.css';
import AcnhHeader from './components/AcnhHeader/AcnhHeader';
import FishGuide from './components/FishGuide/FishGuide';
import Footer from './components/Footer/Footer';
import Settings from './components/Settings/Settings';
import { Theme, ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = React.useState(Theme.North);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" data-testid="App">
        <AcnhHeader />
        <Settings />
        <FishGuide />
        <Footer />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
