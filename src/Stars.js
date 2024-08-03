import './App.css';
import './Stars.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function Stars() {
//    console.log('in Stars Component');

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className='Stars'>
            {[...Array(5)].map((star, index) => {
                <FaStar key={index} />;
                const currentRating = index +1;
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating"
                            value={currentRating} 
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className="star" 
                            size={30}
                            color={currentRating <= (hover || rating) ? "#FFc107" : "e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>            
                );                
            })}
            <p>Your rating is {rating}</p>
        </div>
    )
}

export default Stars;