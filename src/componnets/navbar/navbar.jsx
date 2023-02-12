import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import "./navbar.scss"
import Sidebar from "../sidebar/sidebar"
import {useDispatch} from "react-redux"
import {selectSearch }from "../../api/GenreCategory"
import {ThemeContext} from "../context/context"



const Navbar = () => {
 
  const [sidebar,setSidebar]=React.useState(false);
  const [movie,setMovie]=React.useState('')
  const {on,setOn}=React.useContext(ThemeContext)
  const dispatch=useDispatch()

  const toggleSidebar=()=>{
    setSidebar(prevState=> !prevState)
  }

  const lightdark=()=>{
    setOn(!on)
    
  }
  const searchMovie=(e)=>{
    if(e.key==="Enter"){
      e.preventDefault()
      dispatch(selectSearch(movie))
    }
   
  }
  return (
    <div className='navbar'>
      <div className={on ? "light-nav navbar-mobile" : "dark-nav navbar-mobile"}>
        <div className='top'>
            <MenuIcon className='icon' onClick={toggleSidebar}/>
            <Brightness7Icon className='icon sun'  onClick={lightdark}/>
            <Brightness4Icon className='icon moon'  onClick={lightdark}/>
            <div >  <a className='sign'><span>LOGIN</span> <AccountCircleIcon className='icon'/></a> </div>
        </div>
        <div >
           <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/> 
        </div>
        <div className="search-mobile">
          <div className='search-logo'>
            <SearchIcon className='logo'/>
          </div>
          <form>
        <input type="text" onChange={(e)=>setMovie(e.target.value)} onKeyPress={searchMovie} />
          </form>
       </div>
        
      </div>
      <div className={on ? "light-nav navbar-desktop" : "dark-nav navbar-desktop"}>
        <div className='main'>
          <div className='side'>
            <Sidebar />
          </div>
          <div className='nav'>
            <Brightness7Icon className='icon sun' onClick={lightdark}/>
            <Brightness4Icon className='icon moon' onClick={lightdark}/>
            <div className="search-desktop">
              <div className='search-logo'>
                 <SearchIcon className='logo'/>
               </div>
               <form>
                  <input type="text" onChange={(e)=>setMovie(e.target.value)} onKeyPress={searchMovie} />
               </form>
             </div>
             <div> <a className='sign'> <span>LOGIN</span> <AccountCircleIcon className='icon'/></a> </div>
          </div>
        </div>

      </div>
      </div>
    
  )
}

export default Navbar