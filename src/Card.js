import './Card.css';
import {Link}from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Card({cardButton, name, secondName, children}) {
    let  params = useParams()
    function changeListName() {
        console.log(params)
    }
return (
    <div className='Card' >
        {cardButton}
        <h1 onClick={changeListName}>{name}</h1>
        <p style={{color: "#03fc88"}}>{secondName}</p>
        {/* <h1 onClick={<Link to={`/ViewAndEditList/${props.cardIndex}`} />}>{props.name}</h1> */}
        {children}
    </div>
);

}
