import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';
import './Css/SignUp.css'; // Εισάγεις το CSS αρχείο σου

export default function SignUp() {
  const [opened, { open, close }] = useDisclosure(false);

  function handleSignUp() {
    // Λογική για το signup
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Sign Up" centered>
        {/* Modal content */}
        <div>Add your Name</div>
        <TextInput placeholder="Enter your name" />
        
        <div>Add your Email</div>
        <TextInput placeholder="Enter your email" />

        <div>Add your Password</div>
        <TextInput placeholder="Enter your password" type="password" />
        
        {/* Εδώ κάνουμε χρήση className με σωστό τρόπο */}
        <Button className="SignUpButton" onClick={handleSignUp}>
          Sign Up
        </Button>
      </Modal>

<Button variant="default" onClick={open}>
        Sign Up
      </Button>

    </>
  );
}
