import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export function useMovies(){
  return useContext(MovieContext)
}


export default function MovieProvider({children}){
  const [movies, setMovies] = useState([]);

  return(
    <MovieContext.Provider value={[movies, setMovies]}>
        {children}
    </MovieContext.Provider>
  )
}
