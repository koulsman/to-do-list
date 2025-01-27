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
import './Buttons.module.css';
import TODO from './TODO';

// Jotai atoms
export const storedList = atom([]);
export const loggedIn = atom([]);
export const userName = atom();
export const Email = atom();

function App() {
  const theme = createTheme({
    /** Αν χρειάζεται, μπορείς να προσθέσεις παραμετροποιήσεις εδώ */
    Button : {
      color: "#00cccc", /* Αφαιρέθηκαν τα quotes */
      backgroundColor: 'black'
      }
  });

  const [user, setUser] = useState([]);

  return (
    <MantineProvider theme={theme}>
      
      
      <main>
      
      
        <div className="App">
        <h1><TODO/></h1>
        <div>
        <SignUp/>
        <Login/>
        </div>
        
        
      
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
