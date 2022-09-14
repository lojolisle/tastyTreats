import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Route, Routes } from "react-router-dom";

function Page() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cuisine/:type" element={<Cuisine/>}/>
      </Routes>
  )
}

export default Page