import React from 'react'
import './App.scss';
import Navbar from "./componnets/navbar/navbar"
import Sidebody from "./componnets/sidebody/sidebody"
import MovieInfo from './componnets/movie/MovieInfo';
import ActorInfo from './componnets/Actor/ActorInfo';
import { Route, Routes } from "react-router-dom";
import {ThemeContext} from "./componnets/context/context"

function App() {
  const [on,setOn]= React.useState(true)

  return (
    <ThemeContext.Provider value={{on,setOn}}>
    <div className={on ? "light-app App" : "dark-app App"}>
         <Navbar />
        <Routes>
        <Route path='/' element={ <Sidebody/>}/>
        <Route path='/movie/:id' element={<MovieInfo/>} />
        <Route path='/actors/:id' element={<ActorInfo/>}/>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
