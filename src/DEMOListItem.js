import { TextInput, Button } from "@mantine/core";
import { useCallback } from "react";
import styles from "./Buttons.module.css";
import deleteListItem from './svg/delete-listitem.svg'

export default function ListItem({ listItem, setList, index }) {
  const deleteListItemHandler = useCallback(
    (event) => {
      event.preventDefault();
      setList((listItems) => {
        const newArray = [...listItems];
        console.log(
          "diagrafw to listItem " +
            listItem +
            " pou einai sto position " +
            index
        );
        newArray.splice(index, 1);
        return newArray;
      });
    },
    [setList, listItem, index]
  );

  const onChangeHandler = useCallback(
    (event) => {
      event.preventDefault();
      const newListItem = event.target.value;
      setList((listItems) => {
        const newArray = [...listItems];
        newArray[index] = newListItem;
        return newArray;
      });
    },
    [setList, index]
  );

  return (
    <div style={{ display: "flex", marginTop: "1em" }}>
      <TextInput type="text" onChange={onChangeHandler} value={listItem} />
      <img style={{height:'1.3em', width:'1.3em', background: '#03fc88', borderRadius: '0.1em', marginLeft:'1em'}}src={deleteListItem} alt='Delete' 
        onClick={deleteListItemHandler}
        value={listItem}
      />

     
    </div>
  );
}
