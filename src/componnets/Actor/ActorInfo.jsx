import React from "react";
import "./ActorInfo.scss";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Link, useParams,useNavigate} from "react-router-dom";
import {useGetActorInfoQuery, useGetMoviesByActorIdQuery} from "../../api/tmdbApi"
import Pagination from "../pagination/pagination"
import MovieCard from "../card/movieCard" 
import {ThemeContext} from "../context/context"
import{Box,CircularProgress} from  '@mui/material'

function ActorInfo() {
  const id = useParams().id;
  const [currentPage, setCurrentPage] = React.useState(1);
  const { data,isFetching } = useGetActorInfoQuery({id})
  const{data:actorMovie}= useGetMoviesByActorIdQuery({id,currentPage})
  const İMAGE_URL = "https://image.tmdb.org/t/p/original";
 const ACTORIMDB_URL ="https://www.imdb.com/name/"
 const navigate = useNavigate();
 const {on}=React.useContext(ThemeContext)
 
 
  if(isFetching){
    return(
      <Box display="flex" justifyContent="center" style ={{height:"700px"}}>
        <CircularProgress size="4rem"/>
      </Box>
    )
  }
  return (
   <>
   {data?.profile_path &&
    <div className={on ? "light-acInfo actor" : " dark-acInfo actor"}>
      <div className="mainActor">
        <div className="actorImg">
          <img src={İMAGE_URL+data?.profile_path} alt="" />
        </div>
        <div className="actorInfo">
          <h2>{data?.name}</h2>
          <h5>Born: {new Date (data?.birthday).toDateString().slice(3,15)}</h5>
          <p>{data?.biography} </p>
          <div className="btns">
             <button className="imdb"><a href={ACTORIMDB_URL+data?.imdb_id} target="_blank">IMDB</a></button>
            <button className="backBtn" onClick={()=>navigate(-1)}> <KeyboardBackspaceOutlinedIcon/>Back </button>
           </div>
        </div>
      </div>
      <h3 className="title">Movies</h3>
      <div className='cards'>
           {
              actorMovie?.results?.map((movie)=>(
                <Link to={`/movie/${movie.id}`}>
                    <MovieCard key ={movie.id} movie={movie}/> 
                </Link>
             ))
          }
          </div>
          <div className='pag'>
            <Pagination setCurrentPage={setCurrentPage} totatPages = {actorMovie?.total_pages}/>
        </div>
    </div>}
   </>
  );
}

export default ActorInfo;
