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

  const listItems = Array.isArray(props.cardHovered) ? props.cardHovered : [];

  return (
    
      <div className='CreatedList' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {props.cardButton}
        <Link to={`/ViewAndEditList/${props.listUrl}`}>{props.name}</Link>

        {isHovering && (
          <ul className="ListItems">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
   
  );
}
