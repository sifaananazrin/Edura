import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import Wrapper from '../User/components/Wrapper'
import Breadcrumbs from '../User/components/Breadcrumbs'
import CurrentStatus from '../User/components/CurrentStatus/CurrentStatus'
import CourseDescription from '../User/components/CourseDescription'
import CourseDetails from '../User/components/CourseDetails'
import Courses from '../User/components/Courses'
import LearnCourse from '../User/components/LearnCourse'
import CourseContent from '../User/components/CourseContent'

// import {config} from "../../Helpers/axiosUserEndpoints"





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
  // console.log(location)
  const selectedCourses = location.state.selectedCourses;
  const name = selectedCourses.name;
  const cid = selectedCourses._id;
  const image = selectedCourses.image;
  const des = selectedCourses.description;
  const price = selectedCourses.price;
  const link = selectedCourses.link;
  const list = selectedCourses.list;
  const course_id = selectedCourses._id;
  const teachername = selectedCourses.teachername;
  const teacherid = selectedCourses.teacherid;
  const user_id =localStorage.getItem("uid")


const config = {
  headers: {
    Authorization: `${localStorage.getItem("usertoken")}`,
  },
  params: {
    user_id: user_id,
    cid: cid
  }
};



const [puchase, setpuchase] = useState('');
// const [purchased, setPurchased] = useState(false);

//  console.log(puchase)





useEffect(() => {
  async function fetchData() {
    try {

  const response = await axios.get("/api/alreadyoder",config);
         setpuchase(response.data);
        //  setPurchased(true);
      // console.log(response.data)
    } catch (error) {
      localStorage.removeItem("usertoken");
        localStorage.removeItem("uid");
      console.log(error);
    }
  }

  fetchData();
}, []);


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

            <CurrentStatus  price={price} teacherid={teacherid} name={name} image={image} puchase={puchase} teachername={teachername} link={link} course_id={course_id} list={list}  />
            <CourseDescription des={des} />
            {/* <LearnCourse /> */}

         <Box>
            {puchase.success  ? (
        <CourseContent list={list} />
        // <CourseDetails />
      ) : (
        <h1>You haven't purchased this course yet.</h1>
      )}

</Box>
            {/* <CourseContent /> */}
          </Box>
          <Box>
          {puchase.success  ? (
        <CourseDetails list={list} />
        // <CourseDetails />
      ) : (
        <h1>You haven't purchased this course yet.</h1>
      )}
            {/* <CourseDetails /> */}
            {/* <Courses /> */}
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default CourseDetailsScreen
