import { TextInput, Button } from "@mantine/core";
import { useCallback } from "react";
import './Buttons.css'


export default function ListItem({listItem,setList,index}) {

    const deleteListItemHandler = useCallback((event) => {
        event.preventDefault();
        setList(listItems => {
            const newArray = [...listItems];
            console.log("diagrafw to listItem " + listItem + " pou einai sto position " + index);
            newArray.splice(index,1);
            return newArray;

        })
    },[setList,listItem,index]);

    const onChangeHandler = useCallback((event) => {
        event.preventDefault();
       const newListItem = event.target.value;
       setList(listItems => {
         const newArray = [...listItems];   
         newArray[index] = newListItem;
         return newArray;
       })
    },[setList,index]);



    

    return (
        <div style={{display: 'flex', marginTop: "1em"}}>
            
            <TextInput type="text" onChange={onChangeHandler} value={listItem}  />
            <Button variant="filled" className="buttonVariant" onClick={deleteListItemHandler} value={listItem}>Delete</Button>
        </div>
    );
}

