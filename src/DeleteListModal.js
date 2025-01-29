import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import deleteListImg from "./svg/delete-list.svg"

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

      
      <img style={{height:'1.3em', width:'1.3em', background: '#03fc88', borderRadius: '0.1em', border: "1em black" }} src={deleteListImg} alt='Delete' 
             onClick={open}
            />
      
    </>
  );
}