import './App.css';
import './CreateList';
import './ViewLists';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


import Card from './Card';
import CreateList from './CreateList';
import ViewLists from './ViewLists';
import Header from './Header'
export default function MainMenu() {
  return (

    <div className='Menu' id="menu">
      
      <Link to="/CreateList"><Card name="Create a New List" /></Link>
      <Link to="/ViewLists"><Card name="View your lists" /></Link>


      <Routes>
        {/* <Card name="Create a New List" text="click here to create a new to do list"> */}
          <Route exact path="/CreateList" element={<CreateList />}>
          </Route>
 
        
          <Route exact path="/ViewLists" element={<ViewLists />}>
          </Route>
      </Routes>
    </div>
  );

}


