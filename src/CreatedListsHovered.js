import './Card.css';
import {Link}from 'react-router-dom';


export default function CreatedListsHovered(props) {

return (
    // <div className = {props.cardCondition} >
    <div className='CreatedList'>
        {props.cardButton}
        
        {/* <h1>{props.name}</h1> */}
        <Link to={`/ViewAndEditList/${props.cardIndex}`}>{props.name}</Link>
        
        {/* <div>{props.listItems}</div> */}
        {props.children}
    </div>
);

}