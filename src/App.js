
import { useState ,useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
//import SearchIcon from './search.svg';

//c65a7b83

const API_URL = "http://www.omdbapi.com?apikey=c65a7b83";
const movie1={
  "Poster"
: 
"https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
"Title"
: 
"Italian Spiderman",
"Type"
: 
"movie",
"Year"
: 
"2007",
"imdbID": "tt270"
}



function App() {
  const [movies , setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('spiderman');

  },[])
 
  return (  
    <div className="app">
      <h1>MovieSearch</h1>
       <div className="search">
        <input
           placeholder='search for a movie'
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
  alt="search"
  onClick={() => searchMovies(searchTerm)}
/>



       
        
       </div>
       {
        movies.length>0?
        (<div className='container'>
        {movies.map((movie)=> (
        <MovieCard movie1={movie}/>))}
    </div>) :(
      <div className='empty'>
        <h2>No Movies found</h2>
      </div>
    )
       }
       
     
     
    </div>
  );
}

export default App;
