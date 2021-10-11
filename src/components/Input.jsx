import {useState} from 'react'
import {useMovies} from '../contexts/MovieContext.jsx'

export default function Input() {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useMovies()

  const changeHandler = event => setMovie({...movie, [event.target.name]:event.target.value})

  const submitHandler = event => {
    event.preventDefault();
    setMovies([...movies, movie]);
    setMovie('');
  }
  
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name='movieName' onChange={changeHandler}/>
      <input type="number" name='price' onChange={changeHandler}/>
      <input type="submit" value='SUBMIT'/>
    </form>
  )
}
