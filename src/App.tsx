import React from 'react';
import './App.css';
import AcnhHeader from './components/AcnhHeader/AcnhHeader';
import CollectableViews from './components/CollectableViews/CollectableViews';
import Footer from './components/Footer/Footer';
import Settings from './components/Settings/Settings';
import { Hemisphere, ThemeContext } from './context/ThemeContext';

function App() {
  const [theme, setTheme] = React.useState({ hemisphere: Hemisphere.North, featureCarousel: false });

  return (
    <ThemeContext.Provider value={{ themes: theme, setTheme }}>
      <div className="App" data-testid="App">
        <AcnhHeader />
        <Settings />
        <CollectableViews />
        <Footer />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
