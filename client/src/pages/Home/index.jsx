import React from 'react'
import Courses from '../../components/course_table'
import Navbar from "../../components/navbar"

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Courses/>
    </div>
  )
}
