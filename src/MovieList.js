import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Movie from './Movie';
import {useState} from 'react'
import Stars from './Stars';

function MovieList ({movies}) {
   console.log('in MovieList Component');

    const[selectedMovie, setMovie] = useState(movies[0])

    function selectMovie(e) {
        // console.log(e.target.id);

        let buttonPressed = e.target.id;
        let idxLit = buttonPressed.split('-');
        let idx = idxLit[1];

        // console.log (idx);

        setMovie(movies[idx]);
        }

    return (
        <div>
            <table className="movieTable">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Year</th>
                        <th>Plot Summary</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => {
                        return (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.director}</td>
                                <td>{movie.year}</td>
                                <td>{movie.plotsum}</td>
                                <td><button id={`selectMovie-${index}`} className="btn btn-outline-success" onClick={selectMovie}>Select</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Movie props={selectedMovie} />
        </div>
    )
}



export default MovieList;