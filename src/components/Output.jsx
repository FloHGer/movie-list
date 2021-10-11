import {useMovies} from '../contexts/MovieContext.jsx'

export default function Output() {
  const [movies] = useMovies();
  
  return (
    <>
      <h1>List of movies:</h1>
      {movies &&
      movies.map((e, i)=>{
        return(
          <div key={i}>
            <h3>{e.movieName}</h3>
            <p>{e.price}€</p>
          </div>
        )
      })}
    </>
  )
}
