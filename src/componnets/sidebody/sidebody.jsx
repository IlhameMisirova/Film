import React from 'react'
import { Link} from "react-router-dom";
import "./sidebody.scss"
import MovieCard from "../card/movieCard" 
import Pagination from "../pagination/pagination"
 import {useSelector} from "react-redux"
import {useGetMoviesQuery} from "../../api/tmdbApi"
import{Box,CircularProgress,Typography} from  '@mui/material'






function Sidebody() {


  const [currentPage, setCurrentPage] = React.useState(1);
  const { genreIdOrCategoryName,searchQuery} = useSelector((state) => state.currentGenreOrCategory);
  const { data,isFetching } = useGetMoviesQuery({ genreIdOrCategoryName, currentPage,searchQuery })
  const İMAGE_URL = "https://image.tmdb.org/t/p/original";


  if(isFetching){
    return(
      <Box display="flex" justifyContent="center" style ={{height:"700px"}}>
        <CircularProgress size="4rem"/>
      </Box>
    )
  }

  if(!data?.results.length){
    return(
      <Box display="flex" justifyContent="center" alignItems="center" mt="40px">
        <Typography variant ="h4">
          No movies that match that name
          <br/>
          Please search for something else 
        </Typography>

      </Box>
    )
  }



  return (
    <div className='sidebody'>
          <div className='main'>
            <Link to={`/movie/${data?.results[0].id}`}> 
              <div className='movie' style={{backgroundImage:`url(${İMAGE_URL + data?.results[0].backdrop_path})`}}>
                <div className='movieName'>
                  <p>{data?.results[0].title}</p>
                </div>
                <div className='movieContent'>
                  <p>
                  {data?.results[0].overview}
                 </p>
                </div>
              </div>
            </Link>
           <div className='cards'>
           {
              data?.results?.map((movie)=>(
                <Link to={`/movie/${movie.id}`}>
                    <MovieCard key ={movie.id} movie={movie}/> 
                </Link>
             ))
          }
          </div>
          
        <div className='pag'>
        <Pagination setCurrentPage={setCurrentPage} totatPages = {data?.total_pages}/>
        </div>
         
        </div>
        
    </div>
  )
}

export default Sidebody
