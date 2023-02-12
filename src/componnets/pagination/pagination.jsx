import React from 'react'
import "./pagination.scss"
import {ThemeContext} from "../context/context"


function Pagination({totalPages,setCurrentPage}) {

   const [currentButton,setCurrentButton]=React.useState(1)

  React.useEffect(()=>{
  setCurrentPage(currentButton)
},[currentButton])
   const {on}=React.useContext(ThemeContext)

  return (
    <div className={on ? " light pagination" : " dark pagination" }>
      <button className={`${currentButton===1 ? "btn disabled" : "btn"}`} onClick={()=>setCurrentButton((prev)=>prev===1 ? prev : prev-1)}>Prev</button>
      <div className='num'>{currentButton}</div>
      <button  className={`${currentButton===totalPages ? "btn disabled" : "btn"}`} onClick={()=>setCurrentButton((prev)=>prev===totalPages? prev : prev+1)}>Next</button>

    </div>
  )
}

export default Pagination