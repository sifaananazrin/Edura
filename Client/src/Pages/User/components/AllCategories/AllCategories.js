import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

//IMPORTING ICONS
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'

import styles from './styles'

const AllCategories = () => {
  return (
    <Box sx={{ pt: '90px', minWidth: '299px' }}>
      <Card sx={styles.card}>
        <Typography sx={styles.title}>
          all categories
          <ExpandCircleDownIcon sx={styles.icon} />
        </Typography>
        <List>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
          <ListItem sx={styles.listItem}>Lorem ipsum dolor</ListItem>
        </List>
      </Card>
    </Box>
  )
}

export default AllCategories
