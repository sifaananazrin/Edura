import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Wrapper from '../Wrapper'

//IMPORTING SVG'S AND IMAGES
import banner_photo from '../../../../assets/banner_photo.png'
// import ant_design_play from '../../assets/ant-design_play-circle-filled.svg'
import eye from '../../../../assets/eye.svg'
import bx_bxs_time from '../../../../assets/bx_bxs-time.svg'
import el_group from '../../../../assets/el_group.svg'
// import planet from '../../assets/planet.svg'

import styles from './styles'

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/totalcounts')
      .then(response => {
        setData(response.data);
      
      })
      .catch(error => {
      });
  }, []);
  
  return (
    <Box sx={styles.hero}>
      <Wrapper>
        <Box sx={styles.info}>
          <Box component='img' sx={styles.imgBanner} src={banner_photo} />
          <Box sx={{ zIndex: 3, position: 'relative' }}>
            <Typography variant='h2' sx={styles.title}>
              A revolutionary way to educate.
            </Typography>
            <Typography variant='body1' sx={styles.text}>
              “Online education is electronically supported learning that relies
              on the Internet for teacher/student interaction and the
              distribution of class materials.”
            </Typography>
            <Box sx={styles.wrapperBtn}>
              <Link sx={styles.link}>
                {/* <Box component='img' src={ant_design_play} /> */}
                {/* <Box component='span'>What’s null?</Box> */}
              </Link>
              <Button component={Link} to='/user/currently-featured' sx={styles.viewBtn}>
                <Box component='img' src={eye} />
                view courses
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.blockCards}>
          <Card sx={styles.card}>
            <Box component='img' src={bx_bxs_time} />
            <Box sx={styles.content}>{data.TotalInstructors}</Box>
            <Box sx={styles.subContent}>Instractors</Box>
          </Card>
          <Card sx={styles.card}>
            <Box component='img' src={el_group} />
            <Box sx={styles.content}>{data.TotalUsers}</Box>
            <Box sx={styles.subContent}>Students</Box>
          </Card>
          {/* <Card sx={styles.card}>
            <Box component='img' src={planet} />
            <Box sx={styles.content}>110+</Box>
            <Box sx={styles.subContent}>Countries</Box>
          </Card> */}
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Hero
