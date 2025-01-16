
import './App.css';
import './CreateList.css'
import Card from './Card';
import Header from './Header'
import ListItem from './ListItem';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
// import { create } from 'zustand';
// import { useStore } from './zustand';
import { atom, useAtom } from 'jotai';
import { storedList } from './App';
import {useAtomWithStorage} from 'jotai/utils';


function CreateList() {

  const [list, setList] = useState([]);
  const [title, setTitle] = useState('input a title');

  const [finalList, setFinalList] = useAtom(storedList);
  const navigate = useNavigate();

  const titleHandler = (event) => {
    event.preventDefault();
    return title;
  }

  const addHandler = (event) => {
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
  



  // event.preventDefault();


  //   setFinalList(finalList => {
  //     const submitArray = [...finalList,''];
  //     console.log(finalList);
  //     return submitArray;
  //   })
  //   console.log("final list kai fl");
  //   console.log(finalList);

  //   navigate("/ViewLists");
  //   return finalList;



return (
  <div className="CreateList">
    <Header />
    <Card>
      <form onSubmit={formSubmitHandler} className='form'>
        <textarea placeholder="enter your list's name" onChange={(event) => setTitle(event.target.value)}>{titleHandler}</textarea>
        <button onClick={addHandler}>Add list item</button>
        <div>{list.map((x, index) => <ListItem listItem={x} key={index} index={index} setList={setList} />)}</div>
        <div><button type="submit" className="button">Submit</button></div>
      </form>
    </Card>
  </div>
);
}

export default CreateList;
