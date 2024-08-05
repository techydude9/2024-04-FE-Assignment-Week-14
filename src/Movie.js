import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReviewList from './ReviewList';
import Stars from './Stars';


function Movie({selectedMovie}) {
    // console.log('in Movie Component');
    console.log(selectedMovie);

    let theMovieTitle = "";
    let theMovieDirector = "";
    let theMovieYear = "";
    let theMoviePlotSum = "";

    // $('#movieDisplay').toggle();

    if(selectedMovie != null ) {
        theMovieTitle = selectedMovie.title;
        theMovieDirector = selectedMovie.director;
        theMoviePlotSum = selectedMovie.plotsum;
        theMovieYear = selectedMovie.year;}
    
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
                        <tr>
                            <td>PLOT SUMMARY:</td>
                        </tr>
                        <tr>
                            <td>{theMoviePlotSum}</td>
                        </tr>
                    </thead>
                    <tbody>     
                    </tbody>  
               </table>
            </div>
            <div>
                <ReviewList selectedMovie={selectedMovie}/>
                <Stars selectedMovie={selectedMovie}/>
            </div>
        </div>      
    )
}

export default Movie;