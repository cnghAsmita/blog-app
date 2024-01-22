import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';

const AppContext = createContext(null);

function App() {
  const [appStore, setAppStore] = useState({});

  return (
    <AppContext.Provider value={appStore}>
      <div>
        <Header />
        <main>
          <MainSection />
        </main>
      </div>
    </AppContext.Provider>
  );
}

export default App;
