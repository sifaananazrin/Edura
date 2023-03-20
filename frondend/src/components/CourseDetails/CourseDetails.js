import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Radio from '@mui/material/Radio'
import Collapse from '@mui/material/Collapse'

//IMPORTING ICONS
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

import styles from './styles'

const CourseDetails = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Card sx={styles.card}>
      <Box>
        <Typography sx={styles.title}>course details</Typography>
        <Button sx={styles.btnExpand}>
          <ExpandMore />
          expend all
        </Button>
      </Box>
      <Divider sx={{ m: 0.5, borderColor: '#673F86' }} />
      <Box sx={{ mt: '24px' }}>
        <Typography sx={styles.title}>introduction</Typography>
        <Box sx={styles.titleLesson}>
          <Radio />
          <Typography sx={styles.lessonNumber}>lesson 1.1</Typography>
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
          2 quizzes
        </Box>
        <Collapse in={open}>
          <Box sx={styles.basicTopicLesson}>
            <Radio />
            <Typography>basic topic 1</Typography>
          </Box>
        </Collapse>
        <Divider sx={{ m: 0.5, borderColor: '#673F86', mt: '24px' }} />
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
        </Collapse>
      </Box>
    </Card>
  )
}

export default CourseDetails
