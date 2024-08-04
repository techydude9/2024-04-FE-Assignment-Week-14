import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Review from './Review';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Stars from './Stars';


function Movie(movie) {
    // console.log('in Movie Component');
    console.log(movie.props);
    let theMovieTitle = movie.props.title;

    return (
        <div className="card">
            <p className="card-title text-center ">
               {theMovieTitle}
            </p>
            <div className='card-body'>
                <table>
                    <thead className='movieThead'>
                        <tr>Plot Summary:</tr>
                        <tr>{movie.props.plotsum}</tr>
                        <tr> </tr>
                        <tr>Director: {movie.props.director}</tr>
                        <tr>Year: {movie.props.year}</tr>
                    </thead>
                    <tbody>
                        <Review />
                        <ReviewForm />
                        <ReviewList />
                    </tbody>
               </table>
            </div>
            <div>
                <Stars />
            </div>
        </div>
        
        
    )



}

export default Movie;