import { useState } from 'react'
import React from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Radio from '@mui/material/Radio'
import Collapse from '@mui/material/Collapse'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import YouTube from 'react-youtube';
//IMPORTING ICONS
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

import styles from './styles'

const CourseDetails = ({list }) => {

  console.log(list)

  const [open, setOpen] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = () => {
    setOpen(!open)
  }

  const handleClick2 = (item) => {
    setTrailerUrl(item.list);
    console.log(item.list)
    // console.log(link)
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Card sx={styles.card}>
      <Box>
        <Typography sx={styles.title}>course videos</Typography>
        {/* <Button sx={styles.btnExpand}>
          <ExpandMore />
          expend all
        </Button> */}
      </Box>
      <Divider sx={{ m: 0.5, borderColor: '#673F86' }} />
      <Box sx={{ mt: '24px' }}>
        <Typography sx={styles.title}>introduction</Typography>
        <Box sx={styles.titleLesson}>
          {/* <Radio /> */}
          <Typography sx={styles.lessonNumber}>lessons</Typography>
        </Box>
        
        <Box sx={styles.blockTopic} onClick={handleClick}>
        
          <Box sx={styles.expand}>
            {open ? (
              <ExpandLess sx={{ color: '#fff' }} />
            ) : (
              <ExpandMore sx={{ color: '#fff' }} />
            )}
          </Box>
           topic 1
          {/* <Divider
            orientation='vertical'
            sx={{ m: 0.5, borderColor: '#673F86', borderBottomWidth: '15px' }}
          /> */}
        </Box>
        <Collapse in={open}>
  {list.map((item, index) => (
    <React.Fragment key={index}>
      <Box sx={styles.basicTopicLesson}>
        <PlayCircleOutlineIcon onClick={() => handleClick2(item)} />
        <Typography> topic {index + 1}</Typography>
      </Box>
    </React.Fragment>
  ))}
</Collapse>

<Box sx={styles.videoContainer}>
    {trailerUrl && (
      <YouTube
        videoId={typeof trailerUrl === "string" ? trailerUrl.replace("https://youtu.be/", "") : ""}
        opts={opts}
      />
    )}
  </Box>
        {/* <Divider sx={{ m: 0.5, borderColor: '#673F86', mt: '24px' }} />
        <Typography sx={{ ...styles.title, mt: '24px' }}>section 2</Typography>
        <Box sx={styles.titleLesson}>
          <Radio />
          <Typography sx={styles.lessonNumber}>lesson 2.1</Typography>
        </Box>
        <Box sx={styles.blockTopic} onClick={handleClick}>
          <Box sx={styles.expand}>
            {open ? (
              <ExpandLess sx={{ color: '#fff' }} />
            ) : (
              <ExpandMore sx={{ color: '#fff' }} />
            )}
          </Box>
          1 topic
          <Divider
            orientation='vertical'
            sx={{ m: 0.5, borderColor: '#673F86', borderBottomWidth: '15px' }}
          />
          2 quizss
        </Box>
        <Collapse in={open}>
          <Box sx={styles.basicTopicLesson}>
            <Radio />
            <Typography>basic topic 1</Typography>
          </Box>
        </Collapse> */}
       
      </Box>

    </Card>
    
  )
}

export default CourseDetails
