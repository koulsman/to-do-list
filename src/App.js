import './App.css';
import './CreateList';
import './ViewLists';
import { Route, Routes } from 'react-router-dom';
import Card from './Card';
import CreateList from './CreateList';
import ViewLists from './ViewLists';
import MainMenu from './MainMenu';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import ViewAndEditList from './ViewAndEditList';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import SignUp from './SignUp';
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, addDoc } from "firebase/auth";
import Login from './Login';
import { auth, db } from './firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import GetServerLists from './GetServerLists';



export const storedList = atom([]);
export const loggedIn = atom([]);
export const userName = atom();
export const Email = atom();


function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const [user, setUser] = useState([]);
  const usersCollectionRef = collection(db, "user");

  const myHandler = async (e) => {
    const provider = new GoogleAuthProvider();
    console.log(provider, auth);
    return signInWithPopup(auth, provider).then(() => 
      console.log(auth.currentUser.displayName, auth.currentUser.email, auth.currentUser.uid)
    );
  };

  return (
    <>
      <header>
        <h1>
          MyPlanner  {Login.user}
          {user.map((user) => {
            return (
              <div key={user.id}>
                <h1>{user.name}</h1>
              </div>
            );
          })}
          <button onClick={myHandler}>SignUp</button>
          <SignUp />
        </h1>
      </header>
      <main>
        <div className="App">
          <Routes>
            <Route index element={<MainMenu />} />
            <Route path="/GetServerLists" element={<GetServerLists />} />
            <Route path="/MainMenu" element={<MainMenu />} />
            <Route path="/CreateList" element={<CreateList />} />
            <Route path="/ViewLists" element={<ViewLists />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ViewAndEditList/:index" element={<ViewAndEditList />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
