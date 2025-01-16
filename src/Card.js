import './Card.css';
import {Link}from 'react-router-dom';


export default function Card(props) {
return (
    <div className='Card' >
        {props.cardButton}
        <h1>{props.name}</h1>
        {/* <h1 onClick={<Link to={`/ViewAndEditList/${props.cardIndex}`} />}>{props.name}</h1> */}
        {props.children}
    </div>
);

}
