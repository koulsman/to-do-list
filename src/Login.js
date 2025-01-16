import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Modal, Button, Divider } from '@mantine/core';
import { Link } from "react-router-dom";
import { auth } from './firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Signup from "./SignUp"
import { atom ,useAtom} from 'jotai'


export default function Login() {
  const [opened, { open, close }] = useDisclosure(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // const userLogged = useAtom(user);
      
      
      console.log('User signed in successfully:', user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {opened === true ? 
          <Modal opened={opened} onClose={close} title="Login">
       <h2>Login</h2>
       
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <label>Don't have an account?</label>
      <Link to="/SignUp">Sign Up</Link>
    
      </form>
      
            
        {/* Modal content */}
      </Modal>
      :
          <Button onClick={open}>Login</Button>
        }
    </>
  );
}


