import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Movie from './Movie';
import {useState} from 'react'

function MovieList ({movies}) {
 //   console.log('in MovieList Component');
    

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
                <tbody className="table-hover">
                    {movies.map((movie, index) => {
                        return (
                            <tr key={index}>
                                <td>{movie.title}</td>
                                <td>{movie.director}</td>
                                <td>{movie.year}</td>
                                <td>{movie.plotsum}</td>
                                <td><button id="selectMovie" className="btn btn-outline-success" onClick={selectMovie(movie.index)}>Select</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

function selectMovie(idx) {
    <Movie movieIdx={idx} />
}
export default MovieList;