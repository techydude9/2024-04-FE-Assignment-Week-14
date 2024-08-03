import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Review from './Review';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Stars from './Stars';


function Movie(movieIdx) {
    console.log('in Movie Component -- Movie ID: ' + movieIdx);


    return (
        <div>
            <Review />
            <ReviewForm />
            <ReviewList />
            <Stars />
        </div>
        
    )



}

export default Movie;