import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import React, { useState } from 'react';
import { auth, db } from './firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Login from './Login';

export default function Signup() {
  const [opened, setOpened] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userCreation, setUserCreation] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    try {
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div>
        {opened === true && userCreation === false ? 
          <Modal opened={opened} onClose={() => setOpened(false)} title="Sign Up">

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSignUp}>
              <section>
              <div>
                <label>Username:</label>
                <input
                  data-autofocus
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
              </section>
              <section>
              <label>If you already have an account</label>
              
              <Login />
              </section>
            </form>
          </Modal>
          :
          <Button onClick={() => setOpened(true)}>Sign Up</Button>
        }
      </div>
    </>
  );
}
