import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Switch, Tooltip } from '@mantine/core';
import './Css/SignUp.css'; // Εισάγεις το CSS αρχείο σου
import './Card.css';
import { useState, useEffect } from 'react';
import SignUp from './SignUp';

export default function Login() {
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
  
  function handleLogin() {
    // Λογική για το signup
    console.log(password)
  }
  
  function TypedPassword(password)  {
   setPassword(password);
   
  }

  function RetypedPassword(password)  {
    setRetypedPassword(password);
   
   }

  useEffect(() => {
    if(checked) {
      setName('john doe')
      setEmail('johndoe@gmail.com')
      setPassword('johnnyBeGood')
    }
    if(name.length && 
      email.length && 
      email.includes('@') && 
      password.length> 0 
     ) {
      setButtonState(false)
     
    }
  },[buttonState,password,name,email,checked])
 
  
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
        
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your name" value={name} onChange={(e) => nameHandler(e.target.value)}/>
        
        
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your email" value={email} onChange={(e) => emailHandler(e.target.value)}/>

       
        <TextInput style={{margin: '1em 0 1em 0'}} placeholder="Enter your password" type="password" value={password} onChange={(e) => TypedPassword(e.target.value)}/>
        
        {/* Εδώ κάνουμε χρήση className με σωστό τρόπο */}
        <Button  onClick={handleLogin} disabled={buttonState}>
  Login
 </Button>
 <div>If you dont have an account, <SignUp></SignUp></div>
      </Modal>

<Button className="SignUpButton"variant="default" onClick={open} >
        Login
      </Button>

    </>
  );
}
