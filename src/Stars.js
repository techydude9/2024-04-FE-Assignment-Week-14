import './App.css';
import './Stars.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function Stars(movie) {
   // console.log('In Stars comp');
   // console.log(movie.props.props.rating);

    let previousRating = movie.props.props.rating;

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    // setRating(previousRating);

    return (
        <div className='Stars'>
            {[...Array(5)].map((star, index) => {
                const currentRating = index +1;
                return (
                    <label key={index}>
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