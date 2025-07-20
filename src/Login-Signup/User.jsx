import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useAtom } from 'jotai';
import { loggedUserAtom, isLoggedInAtom } from './LoggedUser';
import '../App.css';
import "../Css/SignUp.css"

export default function User() {
  const [opened, { open, close }] = useDisclosure(false);
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  console.log("LOGGED USER DATA:", loggedUser); // Debugging
  console.log(loggedUser?.name)
  function logoutHandler() {
    setIsLoggedIn(false);
    setLoggedUser('');
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="User Page">
        {/* Correctly accessing the user name */}
        <p>Hello {loggedUser?.name || "No user logged in"}</p> 
        <p>Would you like to</p>
        <Button style={{backgroundColor: "#03fc88", color: "black"}} onClick={logoutHandler}>Logout</Button>
      </Modal>

      <Button style={{backgroundColor: "#03fc88", color: "black"}}  onClick={open}>
        {loggedUser?.name}
      </Button>
    </>
  );
}
