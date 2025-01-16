import './Card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function CreatedLists(props) {


    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    let listItems = props.cardHovered;
    return (
        // <div className = {props.cardCondition} >
        
        <section onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            {isHovering ?
                <div className='CreatedList'>
                   
                        
                    
                    {props.cardButton}
                    <Link to={`/ViewAndEditList/${props.cardIndex}`}><div>{props.name}</div></Link>
                    <ul>{listItems.map((listItemsArray) => <ul className="ListItems">{listItemsArray.map((listItem) => <li>{listItem}</li>)}</ul> )}</ul>
                    
                    
                </div>

                :
                <div className='CreatedList'>
                    {props.cardButton}
                    <Link to={`/ViewAndEditList/${props.cardIndex}`}>{props.name}</Link>
                    {/* {props.children} */}
                </div>}

        </section>

    );

}