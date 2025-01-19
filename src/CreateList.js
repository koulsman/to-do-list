import './App.css';
import './CreateList.css'
import Card from './Card';
import './'
import ListItem from './ListItem';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
// import { create } from 'zustand';
// import { useStore } from './zustand';
import { atom, useAtom } from 'jotai';
import { storedList } from './App';
import {useAtomWithStorage} from 'jotai/utils';
import { TextInput, Button } from '@mantine/core';


function CreateList() {

  const [list, setList] = useState([]);
  const [title, setTitle] = useState('input a title');

  const [finalList, setFinalList] = useAtom(storedList);
  const navigate = useNavigate();

  const titleHandler = (event) => {
    event.preventDefault();
    return title;
  }

  const addListItemHandler = (event) => {
    event.preventDefault();
    setList(listItems => {
      const newArray = [...listItems, ''];
      return newArray;
    })
  }

  console.log(list);

  const formSubmitHandler = useCallback((event) => {
    event.preventDefault();
    
    setFinalList(finalList => {

    
      finalList.push({Mytitle: title, Mylist: [list], isDone: false});
      console.log("console logs inside set final list");
      console.log(finalList);
      
      return finalList;
    } )
    navigate("/ViewLists");
 

  return finalList;
  }, [title,list,navigate]);
  





return (
  <div className="CreateList">

    <Card>
      <form onSubmit={formSubmitHandler} className='form'>
        <div style={{color: "00cccc"}}>
        <TextInput label="Add Title" placeholder="Add your Title"
         onChange={(event) => setTitle(event.target.value)}/>
        <Button onClick={addListItemHandler}>Add list item</Button>
        </div>
        <div>{list.map((x, index) => <ListItem listItem={x} key={index} index={index} setList={setList} />)}</div>
        <div><Button className="" type="submit">Submit</Button></div>
      </form>
    </Card>
  </div>
);
}

export default CreateList;
