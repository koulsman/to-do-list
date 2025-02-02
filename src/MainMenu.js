import './CreateList';
import './ViewLists';
import { useNavigate } from "react-router-dom";  
import Card from './Card';  
import Info from './Info'


export default function MainMenu() {
  const navigate = useNavigate();

  // navigation for CreateList and ViewLists

  function handleCreateList() {
    navigate('/CreateList');
  }

  function handleViewLists() {
    navigate('/ViewLists');
  }



  return (
    <div>
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
