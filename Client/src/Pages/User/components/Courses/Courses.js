import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

import styles from './styles'

const Courses = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>Courses</Typography>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => {
          return (
            <ListItem sx={styles.listItem} key={index}>
              Lorem ipsum dolor sit amet, consectetr
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default Courses
