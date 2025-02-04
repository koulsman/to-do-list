import './CreateList';
import './ViewLists';
import { useNavigate } from "react-router-dom";  
import Card from './Card';  
import Info from './Info'
import { loggedUserAtom,isLoggedInAtom } from './LoggedUser';
import { useAtom } from 'jotai';
import Login from './Login';
import User from './User';
import "./Css/SignUp.css"



export default function MainMenu() {
  const navigate = useNavigate();
 const [loggedUser] = useAtom(loggedUserAtom);
  const [isLoggedIn,setIsLoggedIn] = useAtom(isLoggedInAtom)
  console.log(loggedUser)
  console.log("LOGGED USER" + loggedUser)
  // navigation for CreateList and ViewLists
console.log(isLoggedIn + "ISLOGGEDIN")
  function handleCreateList() {
    navigate('/CreateList');
  }

  function handleViewLists() {
    navigate('/ViewLists');
  }



  return (
    <div>
        {isLoggedIn ? <User className="GreenButton"/> : <Login/>}
      <br />
      <br />
    <div className='Menu' id="menu" style={{display: "flex",justifyContent: "center"}}>
      <div onClick={handleCreateList}>
        <Card name="CREATE" secondName= "a new list"   />
      </div>

      <div onClick={handleViewLists}> 
        <Card name="VIEW" secondName= "your lists"/>
      </div>

    </div>
    <Info/>
    </div>
  );
}
