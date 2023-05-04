// FeaturedCoursesScreen.js
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Wrapper from '../User/components/Wrapper'
import AllCategories from '../User/components/AllCategories'
import SelectOrder from '../User/components/SelectOrder'
import useStyles from './FeaturedCoursesScreenStyle';

const FeaturedCoursesScreen = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Wrapper>
        <Box>
          <Typography variant='h1' textAlign='center'>
           All Courses
          </Typography>
        </Box>
        <Box className={classes.wrapper}>
          {/* <AllCategories /> */}
          <SelectOrder />
        </Box>
      </Wrapper>
    </Box>
  )
}

export default FeaturedCoursesScreen;

