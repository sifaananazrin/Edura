import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

//IMPORTING ICONS
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import styles from './styles'

const LearnCourse = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>
        What you'll learn in this course:
      </Typography>
      <List>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return (
            <ListItem disablePadding key={index}>
              <FiberManualRecordIcon sx={styles.icon} />
              <ListItem sx={styles.listItem}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </ListItem>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default LearnCourse
