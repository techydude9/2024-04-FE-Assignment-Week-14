import './App.css';
import './Stars.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function Stars({selectedMovie}) {
   // console.log('In Stars comp');
    console.log(selectedMovie);

    // const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    function setRating(rating) {
        console.log(rating);

        if (selectedMovie != null) {
        selectedMovie.rating = rating;
        console.log(selectedMovie);
        }
    }

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
                            color={currentRating <= (hover || selectedMovie?.rating) ? "#FFc107" : "e4e5e9"}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>            
                );                
            })}
            <p>Your rating is {selectedMovie?.rating}</p>
        </div>
    )
}

export default Stars;