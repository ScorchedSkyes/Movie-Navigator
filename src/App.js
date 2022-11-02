import "./styles.css";
import movies from "./movies";
import MovieCard from "./MovieCard"

// Within JSX, map over the movies and for each one:
// Return a figure element and give it a className of “card”
// Within the figure, add an img tag with a src attribute set
//   to the posterUrl and alt attribute set to {movie name} movie poster”
// Still within the figure and below the img, add a figcaption tag
//   containing the movie name and release year (in parentheses)

export default function App() {
  return (
    <div className="container">
     <h1>Movie Navigator</h1>
     <section id="movies" className="grid">
       {movies.map((movie)=>(
         <MovieCard movie={movie} />
       ))}
     </section>
    </div>
  );
}
