import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import deleteListImg from "./svg/delete-list.svg"
import axios from 'axios';
import config from "./config";
export default function DeleteListModal({selectedList}) {


  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  async function deleteList() {
    console.log("you want to delete this fucking list");
    // finalList.splice(index, 1);
    // navigate("/ViewLists");
    console.log(selectedList)

    try {
        const response = await axios.delete(`${config.LISTS_API}/list/${selectedList._id}`)
        console.log(response.data)
        if (response.status === 200 ) {
          navigate("/ViewLists")
        }
    }
    catch (error) {
      console.log(error, " : in deleting this list")
    }
    
}
  return (
    <>
      <Modal opened={opened} onClose={close} title="Are you sure you want to delete this list?">
        {/* Modal content */}
        <Button style={{margin: "auto", backgroundColor: "#03fc88", color: "black"}} onClick={deleteList}>yes,delete this list</Button>
      </Modal>

      
      <img style={{height:'1.3em', width:'1.3em', background: '#03fc88', borderRadius: '0.1em', border: "1em black" }} src={deleteListImg} alt='Delete' 
             onClick={open}
            />
      
    </>
  );
}