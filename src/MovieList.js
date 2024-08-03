import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Movie from './Movie';
import Review from './Review';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Stars from './Stars';


function MovieList () {
    console.log('in MovieList Component');

    return (
    <div>
        <h1 id="mainH1">Bob's Movie Reviews</h1>
        <Movie />
        <Review />
        <ReviewForm />
        <ReviewList />
        <Stars />
    </div>
    )
}

export default MovieList;