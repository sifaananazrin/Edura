import React from 'react'
import Box from '@mui/material/Box'
import Hero from '../User/components/Hero'
import FeaturedCourses from '../User/components/FeaturedCourses'
import FeaturedCard from '../User/components/FeaturedCards'
import Benefits from '../User/components/Benefits'
import Become from '../User/components/Become'

const HomeScreen = () => {
  return (
    <Box>
      <Hero />
      <FeaturedCourses />
      <FeaturedCard />
      <Become />
      <Benefits />
    </Box>
  )
}

export default HomeScreen
