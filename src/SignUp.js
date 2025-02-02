import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Switch } from '@mantine/core';
import './Css/SignUp.css'; // Εισάγεις το CSS αρχείο σου
import './Card.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [opened, { open, close }] = useDisclosure(false);
  
  const [buttonState,setButtonState] = useState(true);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [typedPassword, setTypedPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

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
        
        
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your name" value={name} onChange={(e) => nameHandler(e.target.value)}/>
        
        
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your email" value={email} onChange={(e) => emailHandler(e.target.value)}/>

       
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your password" type="password" onChange={(e) => TypedPassword(e.target.value)}/>
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Re-enter your password" type="password" onChange={(e) => RetypedPassword(e.target.value)}/>
        {/* Εδώ κάνουμε χρήση className με σωστό τρόπο */}
        <Button  onClick={handleSignUp} disabled={buttonState}>
  Sign Up
 </Button>
      </Modal>

<Button className="SignUpButton"variant="default" onClick={open} >
        Sign Up
      </Button>

    </>
  );
}
