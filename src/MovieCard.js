export default function MovieCard({movie}) {
  console.log(movie)
  return(
    <figure className="card">
      <img src={movie.posterUrl} alt={movie.name} />
      <figcaption>
        {movie.name}
        ({movie.releaseYear})
      </figcaption>
    </figure>
    ) 
  }