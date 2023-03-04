import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Fruits} from '../pages/Fruits'
import { Animals } from '../pages/Animals'
import { Home } from '../pages/Home'
import { Cars } from '../pages/Cars'
import { Registeration } from '../pages/Register'

export const RoutWrapper = () => {
  return (
    <div>
      <Routes>
        <Route path='/registration' element={<Registeration/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/animals' element={<Animals/>}/>
        <Route path='/fruits' element={<Fruits/>}/>
        <Route path='/cars' element={<Cars/>}/>
      </Routes>
    </div>
  )
}
