import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";

export default function DeleteListModal({finalList,index}) {


  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const deleteList = () => {
    console.log("you want to delete this fucking list");
    finalList.splice(index, 1);
    navigate("/ViewLists");
}
  return (
    <>
      <Modal opened={opened} onClose={close} title="Are you sure you want to delete this list?">
        {/* Modal content */}
        <Button onClick={deleteList}>yes,delete this list</Button>
      </Modal>

      <Button onClick={open}>delete list</Button>
    </>
  );
}