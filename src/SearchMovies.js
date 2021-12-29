import React from 'react';
import MovieCard from './MovieCard'

export default function SearchMovie () {
    
    const [query ,setQuery] = React.useState('')
    const [movie ,setMovie] = React.useState([])
    
    const searchMovies = async(e) => {
        e.preventDefault()
        
        const URL = `https://api.themoviedb.org/3/search/movie?api_key=ca6d53591a10b894b5cdafdc717f51ad&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res  = await fetch(URL)
            const data = await res.json();
            setMovie(data.results)
        }
        catch(err){
            console.log(err)
        }
    }
    return (
      <div className ="container">
       <form className="form" onSubmit={searchMovies}>
         <label className = "label" htmlFor = "query" >Movie Name</label>
         <input type = "text" className="input" name="query" placeholder = "i.e Jurrassic Park"
          value = {query} onChange = {(e) => setQuery(e.target.value)}
          />
         <button className = "button" type="submit">Search</button>
       </form>
       
       <div className="card--list">
         {
             movie.filter(movie=> movie.poster_path).map(movie=>{
                 return(
                     <MovieCard
                       key = {movie.id}
                       id ={movie.id}
                       poster_path ={movie.poster_path}
                       title = {movie.title}
                       release_date ={movie.release_date}
                       vote_average ={movie.vote_average}
                       overview ={movie.overview}
                     />
                  )
             })
         }
         
       </div>
      </div>
    );
}

