import React from 'react'
import "./sidebar.scss"
import { Link} from "react-router-dom";
import logo from "../../img/filmLogo.png"
import {catagories,genres} from "../../sidebarData/sidebarData"
import {useGetGenreQuery} from "../../api/tmdbApi"
import { selectGenreOrCategory } from '../../api/GenreCategory';
import { useDispatch } from 'react-redux';
import {ThemeContext} from "../context/context"
import{Box,CircularProgress} from  '@mui/material'



function Sidebar({sidebar,toggleSidebar}) {

  const dispatch = useDispatch();
  const {data, isFetching}=useGetGenreQuery()
  const {on}=React.useContext(ThemeContext)

  if(isFetching){
    return(
      <Box display="flex" justifyContent="center" style ={{height:"700px"}}>
        <CircularProgress size="4rem"/>
      </Box>
    )
  }

  return (
    <div className={sidebar ? 'sidebar-overlay' : " "} onClick={() => toggleSidebar()}>
     <div className={ on ? `sidebar ${sidebar  ? ' active' : ''} light-side` : `sidebar${sidebar  ? ' active' : ''} dark-side`}>
        <div className='img'>
           <img  src={logo} alt="" className='logo' />
        </div>
        <div className='line'></div>
        <div className='categories'>
          <p className='title'>Categories</p>
          <Link to="/">
            
          {catagories.map((item,index)=>(
                 <ul>
                 <li key={index}>
                    <div className="link" onClick={() => dispatch(selectGenreOrCategory(item.value))} >
                     <div className='icon'>{item.icon}</div> {item.title}
                    </div> 
            
               </li>
             </ul>
              
            ))}
          </Link>

        </div>
        <div className='line'></div>
        <div className='genres'>
          <p className='title'>Genres</p>
          <Link to="/">
          {data?.genres.map((item,index)=>(
              <ul>
                  <li key={item.id}>
                     <div className="link" onClick={() => dispatch(selectGenreOrCategory(item.id))}>
                         <div className='icon'>{genres.icon[index]}</div> {item.name}
                     </div> 

                </li>
              </ul>
              ))}
          </Link>  
        </div>

    </div>

    </div>
  )
}

export default Sidebar