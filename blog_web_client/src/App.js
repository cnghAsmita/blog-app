import { createContext, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import { AppContext } from './context';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  const [store, setStore] = useState({
    "user_id": null,
    "access": null,
    "refresh": null,
    "username": null,
    "isAuthenticated": false,
  });

  const value = useMemo(
    () => ({ store, setStore }),
    [store]
  )

  return (
    <AppContext.Provider value={value}>
       <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
