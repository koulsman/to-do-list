
import './App.css';
import { storedList } from './App';
import { atom, useAtom } from 'jotai';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import CreateList from './CreateList';
import MainMenu from './MainMenu'; 
import Card from './Card';
import { useRef, useCallback,useState } from 'react';
import ViewAndEditList from './ViewAndEditList';
import CreatedLists from './CreatedLists';
import CreatedListsHovered from './CreatedListsHovered';

function ViewLists() {
  const navigate = useNavigate();
  const [finalList,setFinalList] = useAtom(storedList);

  
  
  


  

  
  
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
  


   
  return (
    <div className="ViewLists">
      <header className="View-header">
        <h1> 
          View all your lists
        </h1>

      </header>
      
   

         
        {/* { finalList.map((element,index) => 
        <Link to={`/ViewAndEditList/${index}`} 
       
        ><Card name={element["Mytitle"]}
          
          /></Link>
          ) 
          } */}

{ finalList.map((element,index) => 



<CreatedLists  cardHovered={finalList[index]["Mylist"] } cardButton={finalList[index]["isDone"] ? 
  <button className="buttonDone" onClick={() => listDoneHandler(index)}>
    <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
    </svg>
  </button>
  
  : 
  <button className="buttonDone" onClick={() => listDoneHandler(index)}></button>}  name={element["Mytitle"]  } cardIndex={index}
   />) }


   


   

          

          

        
        
        
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
