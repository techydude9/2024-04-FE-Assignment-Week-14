import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReviewList from './ReviewList';
import Stars from './Stars';


function Movie(movie) {
    // console.log('in Movie Component');
    console.log(movie.props);

    let theMovieTitle = "";
    let theMovieDirector = "";
    let theMovieYear = "";
    let theMoviePlotSum = "";

    // $('#movieDisplay').toggle();

    theMovieTitle = movie.props.title;
    theMovieDirector = movie.props.director;
    theMoviePlotSum = movie.props.plotsum;
    theMovieYear = movie.props.year;
    
    return (
        <div id="movieDisplay" className="card">
            <p className="card-title text-center ">
               {theMovieTitle}
            </p>
            <div className='card-body'>
                <table>
                    <thead className='movieThead'>
                        <tr>
                            <td>DIRECTOR: {theMovieDirector}</td>
                            <td>YEAR: {theMovieYear}</td>
                        </tr>
                        <tr>PLOT SUMMARY: </tr>
                        <tr>{theMoviePlotSum}</tr>
                    </thead>
                    <tbody>     
                    </tbody>  
               </table>
            </div>
            <div>
                <ReviewList props={movie}/>
                <Stars props={movie}/>
            </div>
        </div>      
    )
}

export default Movie;