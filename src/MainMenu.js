import './CreateList';
import './ViewLists';
import { useNavigate } from "react-router-dom";  
import Card from './Card';  

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
    <div className='Menu' id="menu">
      <div onClick={handleCreateList}>
        <Card name="CREATE  New List"   />
      </div>

      <div onClick={handleViewLists}> 
        <Card name="VIEW your lists"/>
      </div>
    </div>
  );
}
