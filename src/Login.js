import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Switch, Tooltip } from '@mantine/core';
import './Css/SignUp.css'; // Εισάγεις το CSS αρχείο σου
import './Card.css';
import { useState, useEffect } from 'react';
import SignUp from './SignUp';
import axios from 'axios';
import { useAtom } from 'jotai';
import {loggedUserAtom, isLoggedInAtom} from './LoggedUser'

export default function Login() {
  const [loggedUser,setLoggedUser] = useAtom(loggedUserAtom)
  const [isLoggedIn,setIsLoggedIn] = useAtom(isLoggedInAtom)
  const [opened, { open, close }] = useDisclosure(false);
  
  const [buttonState,setButtonState] = useState(true);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [checked,setChecked] = useState(false);
  // function testHandler() {
  //   setName('john doe')
  //   setEmail
  // }
  function switchHandler(switchState) {
    setChecked(switchState);
    console.log(switchState); // Καταγραφή του τρέχοντος state
  }
  
  function nameHandler(typedName) {
    setName(typedName)
  }

  function emailHandler(typedEmail) {
    setEmail(typedEmail)
  }
  
  async function handleLogin() {
    // Λογική για το signup
    console.log(email + password)
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });
      console.log(response)
      console.log("success")
      setLoggedUser(response.data)
      setIsLoggedIn(true)
   
    }
    catch(error) {
      console.log(error)
    }
  }
  
  function TypedPassword(password)  {
   setPassword(password);
   
  }

  function RetypedPassword(password)  {
    setRetypedPassword(password);
   
   }

   useEffect(() => {
    if (checked) {
      setName('john doe');
      setEmail('johndoe@gmail.com');
      setPassword('johnnyBeGood');
    } else {
      setName('');
      setEmail('');
      setPassword('');
      setButtonState(true);
    }
  }, [checked]); // Ενημερώνει τα πεδία μόνο όταν αλλάζει το checked
  
  useEffect(() => {
    if (
      name.length > 0 &&
      email.length > 0 &&
      email.includes('@') &&
      password.length > 0
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [name, email, password]); // Ξεχωριστός έλεγχος για το κουμπί
  
 
  
  function ReTypedPassword(e) {
    const retypedPassword = e.target.value;
    return retypedPassword;

  }


  return (
    <>
      <Modal  opened={opened} onClose={close} title="Login" centered>
        {/* Modal content */}
        <Tooltip label="For Testers and Recruiters: flip the switch to test user and lists" refProp="rootRef">
        <Switch
          color="#03fc88"
          tooltip="for developers"
          label="for test mode, slide"
          checked={checked}
          onChange={(event) => switchHandler(event.currentTarget.checked)}
/>

    </Tooltip>
        
        <TextInput label="Name:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your name" value={name} onChange={(e) => nameHandler(e.target.value)}/>
        
        
        <TextInput  label="Email:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your Email. A valid email should contain a '@'" value={email} onChange={(e) => emailHandler(e.target.value)}/>

       
        <TextInput label="Password:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your password" type="password" value={password} onChange={(e) => TypedPassword(e.target.value)}/>
        
        {/* Εδώ κάνουμε χρήση className με σωστό τρόπο */}
        <Button style={{backgroundColor: "#03fc88", color: "black"}} onClick={handleLogin} disabled={buttonState}>
  Login
 </Button>
 <div>If you dont have an account, <SignUp></SignUp></div>
      </Modal>

<Button style={{backgroundColor: "#03fc88", color: "black"}} variant="default" onClick={open} >
        Login
      </Button>

    </>
  );
}
