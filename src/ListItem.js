import { TextInput, Button } from "@mantine/core";
import { useCallback } from "react";
import styles from "./Buttons.module.css";
import deleteListItem from './svg/delete-listitem.svg'

export default function ListItem({ listItem, selectedList,setSelectedList, index }) {
  function deleteListItemHandler(index) {
    
console.log(index, "index")
console.log(listItem, "listitemn")

setSelectedList((prevList) => {
    const updatedItems = [...prevList.list_items]; 
    updatedItems.splice(index,1); 

    return {
      ...prevList,
      list_items: updatedItems, 
    };
  });
  }

 function editListItemHandler(v, index) {
  setSelectedList((prevList) => {
    const updatedItems = [...prevList.list_items]; 
    updatedItems[index] = v; 

    return {
      ...prevList,
      list_items: updatedItems, 
    };
  });
}

  return (
    <div style={{ display: "flex", marginTop: "1em" }}>
      <TextInput type="text" onChange={(event) => editListItemHandler(event.target.value,index)} value={listItem} index={index}/>
      <div style={{display: "flex", alignItems: "center"}} >
      <img style={{height:'1.3em', width:'1.3em', background: '#03fc88', borderRadius: '0.1em', marginLeft:'1em'}} src={deleteListItem} alt='Delete' 
        onClick={() =>  deleteListItemHandler(index)}
       
        index={index}
      />
      </div>

     
    </div>
  );
}
