import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieList from './MovieList';
import {useState} from 'react'

let allMovies = [
  {
   title: 'Star Wars episode 4',
   year: '1977',
   director: 'George Lucas',
   plotsum: 'ipsum lorem 4',
   reviews: [],
   rating: null,
 },
 {
  title: 'Star Wars episode 5',
  year: '1982',
  director: 'George Lucas',
  plotsum: 'ipsum lorem 5',
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars episode 6',
  year: '1987',
  director: 'George Lucas',
  plotsum: 'ipsum lorem 6',
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars episode 1',
  year: '1992',
  director: 'George Lucas',
  plotsum: 'ipsum lorem 1',
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars episode 2',
  year: '1997',
  director: 'George Lucas',
  plotsum: 'ipsum lorem 2',
  reviews: [],
  rating: null,
 }
]

function App() {
  const[movies, setMovies] = useState(allMovies)

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="mainH1">Bob's Movie Reviews</h1>
      </header>
      <div>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
