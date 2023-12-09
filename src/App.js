import {useEffect, useState} from 'react'
import './App.css'
import SearchIcon  from './search.svg'
import MovieCard from './MovieCard'
 const VID_URL = 'http://www.omdbapi.com?apikey=c032e2d7'



 const App = () => {
     
  const [movies,setMovies]= useState([])
    const [searchTerm,setSearchTerm] = useState([])
  const searchMoives = async(title)=>{
     const response = await fetch(`${VID_URL}&s=${title}`)
     const data = await response.json()

     setMovies(data.Search)
  }

  useEffect(() => {
       searchMoives('superman')
  }, [])
  
  
  return (
    <div className='app'>
    
      <h1>MoveLAnd</h1>
      <div className='search'>
      <input
      placeholder='write move name'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      ></input>
       <img
            src={SearchIcon}
             alt='S-icon'
             onClick={()=>searchMoives(searchTerm)}       />
       </div>
{
   movies?.length > 0 ?
   (<div className='container'>
    {movies.map((movie)=>(
      <MovieCard movie ={movie}/>
    ))}
    </div> 
   ):(<div className='empty'>
       <h2>no movies found</h2>
       </div>
   )
    

}
      
    </div>
  )
}

export default App