import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Login'
import SignUp from './SignUp'

export default function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/signUp' Component={SignUp}></Route>
    </Routes>
     </BrowserRouter>
    </div>
  )
}
