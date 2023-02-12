import React from "react";
import "./movieInfo.scss";
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import {useDispatch} from "react-redux"
import { Link, useParams,useNavigate} from "react-router-dom";
import {useGetMovieInfoQuery,useGetRecommendationsQuery} from "../../api/tmdbApi"
import {Tooltip, Rating } from '@mui/material';
import {genres} from "../../sidebarData/sidebarData"
import { selectGenreOrCategory } from '../../api/GenreCategory';
import MovieCard from "../card/movieCard" 
import ReactPlayer from 'react-player'
import {ThemeContext} from "../context/context"
import{Box,CircularProgress} from  '@mui/material'




function MovieInfo() {
  const id = useParams().id;
  const { data,isFetching } = useGetMovieInfoQuery({id})
  const {data:recommendation}=useGetRecommendationsQuery({id})
  const İMAGE_URL = "https://image.tmdb.org/t/p/original";
  const IMDB_URL="https://www.imdb.com/title/"
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[trailler,setTrailler]=React.useState(false)
  const {on}=React.useContext(ThemeContext)
  


  const toggleTrailler=()=>{
    setTrailler(prevState=> !prevState)
  }
  if(isFetching){
    return(
      <Box display="flex" justifyContent="center" style ={{height:"700px"}}>
        <CircularProgress size="4rem"/>
      </Box>
    )
  }

  return (
    <div className= {on ? " light-movInfo movieInfo" : " dark-movInfo movieInfo"} >
      {
        trailler &&
        <div className="player" onClick={toggleTrailler}>
         <ReactPlayer url={"https://youtu.be/"+data?.videos?.results[0].key}/>
        </div> 

      }
      <div className="movie">
        <div className="img">
          <img src={İMAGE_URL+data?.poster_path} alt="" />
        </div>

        <div className="info">
          <h3 className="movieTitle">{data?.title} ({data?.release_date.split("-")[0]})</h3>
          <h5 className="content">
          {data?.tagline}
          </h5>
          <div className="nn">
            <div className="totalTip">
              <Tooltip disableTouchListener >
               <div>
                 <Rating readOnly value={data?.vote_average / 2}  precision={0.1} className="star"/>
               </div>
            </Tooltip>
              <span>
                <h6 className="aver">{data?.vote_average} / 10</h6>
              </span>
            </div>
            <div className="time"> {data?.runtime} min / {new Date (data?.release_date).toDateString().slice(3,15)} / {data?.spoken_languages[0].name}</div>
          </div>
          <div className="genres">
            {
              data?.genres.map((item)=>(
                <Link to="/">
                  <div className="genre" onClick={() => dispatch(selectGenreOrCategory(item.id))}>
                    <div className="icon">
                       {genres.name.map((name,i)=>(
                          name===item.name && genres.icon[i]
                        ))}
                    </div>
                    <p>{item.name}</p>
                  </div>    
                </Link> 
              ))
            }
          </div>
          <div className="overview">
            <h5>Overview</h5>
            <p>
            {data?.overview}
            </p>
          </div>

          <div className="topCast">
            <h5>Top Cast</h5>
            <div className="actors">
              {
                data?.credits.cast.map((item)=>(
                  item.profile_path && 
                  <Link to={`/actors/${item.id}`}>
                  <div className="actor" key={item.id}>
                     <img src={İMAGE_URL+item.profile_path} alt="" />
                     <p className="actorName">{item.name}</p>
                     <p className="actorMovieName">{item.character}</p>
                </div>
                </Link>
                )).slice(0,6)
              }
              
            </div>
          </div>
          <div className="buttons">
            <div className="rb">
              <button> <a href={data?.homepage} target="_blank">Website < LanguageOutlinedIcon/></a> </button>
              <button><a href={IMDB_URL+data?.imdb_id} target="_blank">IMDB <MovieCreationOutlinedIcon/></a></button>
              <button onClick={toggleTrailler} className="btn">Trailler <TheatersOutlinedIcon /></button>
            </div>
            <div className="lb">
              <button className="btn" onClick={()=>navigate(-1)}> <KeyboardBackspaceOutlinedIcon/>Back  </button>
            </div>

          </div>
        </div>
      </div>
      <h3 className="title">You might also like</h3>
      <div className='cards'>
           {
              recommendation?.results?.map((movie)=>(
                <Link to={`/movie/${movie.id}`}>
                    <MovieCard key ={movie.id} movie={movie}/> 
                </Link>
             )).slice(0,15)
          }
          </div>
    </div>
  );
}

export default MovieInfo;
