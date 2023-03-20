import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Wrapper from '../../components/Wrapper'
import Breadcrumbs from '../../components/Breadcrumbs'
import CurrentStatus from '../../components/CurrentStatus/CurrentStatus'
import CourseDescription from '../../components/CourseDescription'
import CourseDetails from '../../components/CourseDetails'
import Courses from '../../components/Courses'
import LearnCourse from '../../components/LearnCourse'
import CourseContent from '../../components/CourseContent'

//IMPORTING ICONS
import imageslearn from '../../assets/imageslearn.png'

const styles = {
  wrapper: (theme) => ({
    pt: '24px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      pt: '96px',
      gap: '15px',
    },
  }),
  wrapperLeftBlock: (theme) => ({
    [theme.breakpoints.up('md')]: {
      maxWidth: '717px',
    },
  }),
  img: {
    width: '100%',
    minHeight: '396px',
    objectFit: 'cover',
  },
}
const CourseDetailsScreen = () => {
  return (
    <Box sx={{ pt: '90px' }}>
      <Wrapper>
        <Box>
          <Typography variant='h1' textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <Breadcrumbs />
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.wrapperLeftBlock}>
            <Box component='img' src={imageslearn} sx={styles.img} />
            <CurrentStatus />
            <CourseDescription />
            <LearnCourse />
            <CourseContent />
          </Box>
          <Box>
            <CourseDetails />
            <Courses />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default CourseDetailsScreen
