import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styles from './styles'

const CourseDescription = ({des}) => {
  console.log(des)
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>Course Details</Typography>
      <Typography sx={styles.text}>
        {des}
      </Typography>
    </Box>
  )
}

export default CourseDescription
