import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import Wrapper from '../User/components/Wrapper'
import Breadcrumbs from '../User/components/Breadcrumbs'
import CurrentStatus from '../User/components/CurrentStatus/CurrentStatus'
import CourseDescription from '../User/components/CourseDescription'
// import CourseDetails from '../User/components/CourseDetails'
import Courses from '../User/components/Courses'
// import LearnCourse from '../User/components/LearnCourse'
// import CourseContent from '../User/components/CourseContent'

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
  const location = useLocation();
  console.log(location)
  const selectedCourses = location.state.selectedCourses;
  const name = selectedCourses.name;
  const image = selectedCourses.image;
  const des = selectedCourses.description;
  const price = selectedCourses.price;
  const link = selectedCourses.link;
  const course_id = selectedCourses._id;
  const teachername = selectedCourses.teachername;
  // const tid =localStorage.getItem("teachertoken")
// console.log(link)
 

 

// useEffect(() => {
//   async function fetchData() {
//     try {

    


//       const response = await axios.get("/api/alreadyoder",tid );
     
//       setTeacher(response.data.teacher);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   fetchData();
// }, [config]);


  return (
    <Box sx={{ pt: '90px' }}>
      <Wrapper>
        <Box>
          <Typography variant='h1' textAlign='center'>
            {name}
          </Typography>
          {/* <Breadcrumbs /> */}
        </Box>
        <Box sx={styles.wrapper}>
          <Box sx={styles.wrapperLeftBlock}>
          <Box component='img' src={image?.[0]?.url} sx={styles.img} />

            <CurrentStatus  price={price} name={name} image={image} teachername={teachername} link={link} course_id={course_id}  />
            <CourseDescription des={des} />
            {/* <LearnCourse /> */}
            {/* <CourseContent /> */}
          </Box>
          <Box>
            {/* <CourseDetails /> */}
            <Courses />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default CourseDetailsScreen
