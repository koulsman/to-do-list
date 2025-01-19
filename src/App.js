import './App.css';
import './CreateList';
import './ViewLists';
import { Routes, Route } from 'react-router-dom';
import Card from './Card';
import CreateList from './CreateList';
import ViewLists from './ViewLists';
import MainMenu from './MainMenu';
import { atom } from 'jotai';
import ViewAndEditList from './ViewAndEditList';
import '@mantine/core/styles.css';
import SignUp from './SignUp';
import Login from './Login';
import { createTheme, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import './Buttons.css'

// Jotai atoms
export const storedList = atom([]);
export const loggedIn = atom([]);
export const userName = atom();
export const Email = atom();

function App() {
  const theme = createTheme({
    /** Αν χρειάζεται, μπορείς να προσθέσεις παραμετροποιήσεις εδώ */
  });

  const [user, setUser] = useState([]);

  return (
    <MantineProvider theme={theme}>
      <header>
        <h1>
          {/* Το SignUp είναι εδώ, όπως είναι στο παράδειγμά σου */}
          <SignUp />
        </h1>
      </header>
      
      <main>
        <div className="App">
          {/* Διαδρομές για τις διάφορες σελίδες */}
          <Routes>
            <Route index element={<MainMenu />} />
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/CreateList" element={<CreateList />} />
            <Route path="/ViewLists" element={<ViewLists />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ViewAndEditList/:index" element={<ViewAndEditList />} />
          </Routes>
        </div>
      </main>
    </MantineProvider>
  );
}

export default App;
