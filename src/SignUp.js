import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Switch } from '@mantine/core';
import './Css/SignUp.css'; // Εισάγεις το CSS αρχείο σου
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { loggedUserAtom, isLoggedInAtom } from './LoggedUser';
import { useAtom } from 'jotai';

export default function SignUp() {
  const [opened, { open, close }] = useDisclosure(false);
  
  const [buttonState,setButtonState] = useState(true);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');
  const [loggedUser,setLoggedUser] = useAtom(loggedUserAtom)
  const [isLoggedIn,setIsLoggedIn] = useAtom(isLoggedInAtom)
  // function testHandler() {
  //   setName('john doe')
  //   setEmail
  // }

  function nameHandler(typedName) {
    setName(typedName)
  }

  function emailHandler(typedEmail) {
      setEmail(typedEmail)
  }
  
  function handleSignUp() {
    // Λογική για το signup
    console.log(email +" :email," + name + " :name," + typedPassword + " :password")
    
    axios.post("http://localhost:3001/users", {name, email, password : typedPassword })
    .then(res => {
      console.log(res);
      console.log(res.data);
      
      setLoggedUser(res.data)
      console.log(loggedUser)
      setIsLoggedIn(true)
    })
    .catch((error) => {
      alert(error)
    })
  }
  
  function TypedPassword(password)  {
   setTypedPassword(password);
   
  }

  function RetypedPassword(password)  {
    setRetypedPassword(password);
   
   }

  useEffect(() => {
    if(name.length && 
      email.length && 
      typedPassword.length> 0 
      && typedPassword == retypedPassword) {
      setButtonState(false)
     
    }
  },[buttonState,typedPassword,retypedPassword])
 
  
  function ReTypedPassword(e) {
    const retypedPassword = e.target.value;
    return retypedPassword;

  }


  return (
    <>
      <Modal  opened={opened} onClose={close} title="Sign Up" centered>
        {/* Modal content */}
        <TextInput label="Name:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your Name" value={name} onChange={(e) => nameHandler(e.target.value)}/>
        <TextInput label="Email:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your Email. A valid email should contain a '@'" value={email} onChange={(e) => emailHandler(e.target.value)}/>
        <TextInput label="Password:" style={{margin: '1em 0 1em 0'}} placeholder="Enter your Password" type="password" onChange={(e) => TypedPassword(e.target.value)}/>
        <TextInput label="Retype password:" style={{margin: '1em 0 1em 0'}} placeholder="Re-enter your Password. Passwords must be the same" type="password" onChange={(e) => RetypedPassword(e.target.value)}/>
        {/* Εδώ κάνουμε χρήση className με σωστό τρόπο */}
        <Button  style={{backgroundColor: "#03fc88", color: "black"}} onClick={handleSignUp} disabled={buttonState}>
  Sign Up
 </Button>
      </Modal>

<Button style={{backgroundColor: "#03fc88", color: "black"}} variant="default" onClick={open} >
        Sign Up
      </Button>

    </>
  );
}
