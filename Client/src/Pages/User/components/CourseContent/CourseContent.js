import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Radio from '@mui/material/Radio'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

//IMPORTING ICONS
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import DescriptionIcon from '@mui/icons-material/Description'
import styles from './styles'

const CourseContent = () => {
  const [openCollapse, setOpenCollapse] = useState(false)
  const handleClick = () => {
    setOpenCollapse(!openCollapse)
  }

  return (
    <Box sx={{ pt: '48px', minWidth: '299px' }}>
      <Box sx={styles.titleBlock}>
        <Typography sx={styles.title}>course content</Typography>
        <Button onClick={handleClick}>expand all </Button>
      </Box>

      <Card sx={styles.cardLesson}>
        <Box sx={styles.lesson}>
          {' '}
          <Box sx={styles.titleLesson}>
            <Radio />
            <Typography>lesson 1.1</Typography>
          </Box>
          <Box onClick={handleClick} sx={styles.btnCollapse}>
            Collapse
            <Box sx={styles.wrapperIcon}>
              {openCollapse ? (
                <ExpandLess sx={styles.icon} />
              ) : (
                <ExpandMore sx={styles.icon} />
              )}
            </Box>
          </Box>
        </Box>
        <Collapse in={openCollapse} timeout='auto'>
          <Box>
            <Box sx={styles.blockTopic}>
              1 topic
              <Divider orientation='vertical' sx={styles.topicDivider} />2
              quizzes
            </Box>
          </Box>
          <Box sx={styles.blockInfo}>
            <Typography sx={styles.titleInfo}>
              {' '}
              <DescriptionIcon />
              lesson content
            </Typography>
            <Box sx={styles.blockSteps}>
              0% complate{' '}
              <Divider
                orientation='vertical'
                sx={{ borderColor: '#fff', m: 1 }}
              />
              0/1 steps
            </Box>
          </Box>
          <Box sx={styles.basicTopicLesson}>
            <Radio />
            <Typography>basic topic 1</Typography>
          </Box>
        </Collapse>
      </Card>
      <Typography sx={styles.lessonTitle}>Section 2</Typography>
      <Card sx={styles.cardLesson}>
        <Box sx={styles.lesson}>
          <Box sx={styles.titleLesson}>
            <Radio />
            <Typography>lesson 2.1</Typography>
          </Box>
          <Box onClick={handleClick} sx={styles.btnCollapse}>
            Collapse
            <Box sx={styles.wrapperIcon}>
              {openCollapse ? (
                <ExpandLess sx={styles.icon} />
              ) : (
                <ExpandMore sx={styles.icon} />
              )}
            </Box>
          </Box>
        </Box>
        <Collapse in={openCollapse} timeout='auto'>
          <Box>
            <Box sx={styles.blockTopic}>
              1 topic
              <Divider orientation='vertical' sx={styles.topicDivider} />2
              quizzes
            </Box>
          </Box>
          <Box sx={styles.blockInfo}>
            <Typography sx={styles.titleInfo}>
              {' '}
              <DescriptionIcon />
              lesson content
            </Typography>
            <Box sx={styles.blockSteps}>
              0% complite{' '}
              <Divider
                orientation='vertical'
                sx={{ borderColor: '#fff', m: 1 }}
              />
              0/1 steps
            </Box>
          </Box>
          <Box sx={styles.basicTopicLesson}>
            <Radio />
            <Typography>basic topic 1</Typography>
          </Box>
        </Collapse>
      </Card>
    </Box>
  )
}

export default CourseContent
