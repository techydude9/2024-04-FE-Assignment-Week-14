import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieList from './MovieList';
import {useState} from 'react'

let allMovies = [
  {
   title: 'Star Wars A New Hope',
   year: '1977',
   director: 'George Lucas',
   plotsum: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
   reviews: [],
   rating: null,
 },
 {
  title: 'Star Wars Empire Strikes Back',
  year: '1980',
  director: 'George Lucas',
  plotsum: "After the Rebel Alliance are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars Return of the Jedi',
  year: '1983',
  director: 'George Lucas',
  plotsum: "After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars The Phantom Menace',
  year: '1999',
  director: 'George Lucas',
  plotsum: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.",
  reviews: [],
  rating: null,
 },
 {
  title: 'Star Wars Attack of the Clones',
  year: '2002',
  director: 'George Lucas',
  plotsum: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.",
  reviews: [],
  rating: '3',
 }
]

function App() {
  const[movies, setMovies] = useState(allMovies)

  // $('#movieDisplay').toggle();

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
