
import './App.css';
import { storedList } from './App';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CreateList from './CreateList';
import MainMenu from './MainMenu'; 
import Card from './Card';
import { useRef, useCallback,useState } from 'react';
import ViewAndEditList from './ViewAndEditList';
import CreatedLists from './CreatedLists';
import CreatedListsHovered from './CreatedListsHovered';
import { useEffect } from 'react';
import { SegmentedControl, Grid, Autocomplete, Button } from '@mantine/core';
import { atom, useAtom } from "jotai";
import { loggedUserAtom, isLoggedInAtom } from "./LoggedUser";


function ViewLists() {
  const navigate = useNavigate();
  const [finalList,setFinalList] = useAtom(storedList);
  const [searchResults,setSearchResults] = useState([])
  const [autocompleteValue,setAutocompleValue] = useState('')
  const [segmentedControlValue,setSegmentedControlValue] = useState('All Lists')
  const [selectedList,setSelectedList] = useState(finalList)
  const [loggedUser, setLoggedUser] = useAtom(loggedUserAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  
  console.log("VIEW LISTS LOGGEDUSER"+  loggedUser+ "VIEW LIST LOGGED USER NAME" + loggedUser?.name)
  console.log("VIEW LISTS IS LOGGED IN " + isLoggedIn)
  function deleteAutocompleValueHandler() {
    setAutocompleValue('')
  }

  function segmentedControlHandler(event){
      console.log(event)
      setSegmentedControlValue(event) 
      
      
     
  }

  useEffect(() => {

    if(segmentedControlValue === 'All Lists') {
      console.log(segmentedControlValue)
      setSelectedList(finalList)
}
    else if(segmentedControlValue === 'Undone') {
          console.log(segmentedControlValue)
           let mappedList = finalList.filter((element,index) => (element["isDone"] === false))
          setSelectedList(mappedList)
          console.log(mappedList)
    }
    else if (segmentedControlValue === 'isDone') {

      let mappedList = finalList.filter((element,index) => (element["isDone"] === true))
      setSelectedList(mappedList)
     
    }

  },[segmentedControlHandler,selectedList,segmentedControlValue])
  function searchHandler(typedValue) {
    setAutocompleValue(typedValue);
      console.log(typedValue + "changed")
    //  const a = finalList.map((x) => (x.title))
    console.log(finalList)

    const mySearch = finalList.filter((element,index) => (element['Mytitle'].trim().toUpperCase().startsWith(typedValue)));

    
    console.log(JSON.stringify(mySearch))
    setSearchResults(mySearch)
    console.log(searchResults)
    if (mySearch.length == 0) {
      console.log(searchResults.length)
      console.log('aa')
      const mySearch = finalList.filter((element,index) => (element['Mytitle'].trim().toLowerCase().startsWith(typedValue)));
      console.log(JSON.stringify(mySearch))
    setSearchResults(mySearch)
    }
    
  }
  
  function listDoneHandler(index) {
   
    setFinalList((prevFinalList) => {
      
      let updatedFinalList = [...prevFinalList];
      updatedFinalList[index]["isDone"] = !updatedFinalList[index]["isDone"];
      console.log(updatedFinalList);
      
      return updatedFinalList;
    })
    console.log(finalList);
    console.log(index);
}

useEffect(() => {
  console.log(finalList)
},[finalList])
  
  return (
    <div >
      <header className="View-header">
        <h1 className="Page"> 
          View all your lists
        </h1>

      </header>
      
          <Grid  className="ButtonAndSearchBar" style={{marginBottom: "1em"}} justify="flex-start" left="0">
          {autocompleteValue === '' ?
           <Grid.Col span={2} style={{display: "flex", alignItems: "top"}}><SegmentedControl  color="#03fc88" value={segmentedControlValue} onChange={(e) =>segmentedControlHandler(e)} data={['All Lists','Undone', 'isDone']} /></Grid.Col>
          :
          <Grid.Col span={2}><Button color="#03fc88" onClick={deleteAutocompleValueHandler}>Delete</Button></Grid.Col>}
          <Grid.Col span={8} style={{marginLeft: "1em"}}><Autocomplete value={autocompleteValue} onChange={searchHandler}
      placeholder="Search lists"
     
      /></Grid.Col>
    
          </Grid> 
          {/* sjk */}
          

{ autocompleteValue === ''  ?  selectedList.map((element,index) => 



<CreatedLists  cardHovered={selectedList[index]["Mylist"] } cardButton={selectedList[index]["isDone"] ? 
  <button className="buttonDone" onClick={() => listDoneHandler(index)}>
    <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
    </svg>
  </button>
  
  : 
  <button className="buttonDone" onClick={() => listDoneHandler(index)}></button>}  name={element["Mytitle"]  } cardIndex={index}
   />)  : searchResults.map((element, finalListIndex) => 
   <CreatedLists  cardHovered={finalList[finalListIndex]["Mylist"] } cardButton={finalList[finalListIndex]["isDone"] ? 
    <button className="buttonDone" onClick={() => listDoneHandler(finalListIndex)}>
      <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg>
    </button>
    
    : 
    <button className="buttonDone" onClick={() => listDoneHandler(finalListIndex)}></button>}  name={element["Mytitle"]  } cardIndex={finalListIndex}
     />
   
  //  <div>{searchResults}</div>
 )  } 
      <footer><Link to="/CreateList"><div>Create a New List</div></Link>
      <Link to="/MainMenu"><div>Go to Main Menu</div></Link>
</footer>
      
      <Routes>
        {/* <Card name="Create a New List" text="click here to create a new to do list"> */}
        <Route path=":index" element={<ViewAndEditList />} />
          <Route exact path="/CreateList" element={<CreateList />}>
          </Route>
          <Route exact path="/MainMenu" element={<MainMenu />}>
          </Route>
      </Routes>
    </div>
  );
}

export default ViewLists;
