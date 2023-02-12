import React from 'react'
import "./movieCard.scss"
import {ThemeContext} from "../context/context"
import {Tooltip, Rating } from '@mui/material';
import noPhoto from "../../img/photo.jpg"
const BASE_IMG="https://image.tmdb.org/t/p/w500"





function MovieCard({movie}) {
  const {on}=React.useContext(ThemeContext)
  return (
    <div className={on ? " light-card movieCard" : " dark-card movieCard"}>
      <img src={movie.poster_path ? BASE_IMG+movie.poster_path : noPhoto} alt="" /> 
        <h5>{movie.title}</h5>
        <div className='star'>
        <Tooltip disableTouchListener title={movie.vote_average} >
            <div>
              <Rating readOnly value={movie.vote_average / 2}  precision={0.1} className="star"/>
            </div>
        </Tooltip>
     
        </div>
    </div>
  )
}

export default MovieCard