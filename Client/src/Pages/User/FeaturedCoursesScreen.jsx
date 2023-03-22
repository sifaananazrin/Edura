import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import Wrapper from '../User/components/Wrapper'
import Breadcrumbs from '../User/components/Breadcrumbs'
import CurentlyFeatured from '../User/components/CurentlyFeautured'
import AllCategories from '../User/components/AllCategories'
import SelectOrder from '../User/components/SelectOrder'

const styles = {
  wrapper: (theme) => ({
    gap: '15px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }),
}

const FeaturedCoursesScreen = () => {
  return (
    <Box sx={{ pt: '90px' }}>
      <Wrapper>
        <Box>
          <Typography variant='h1' textAlign='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
          <Breadcrumbs />
          <CurentlyFeatured />
        </Box>
        <Box sx={styles.wrapper}>
          <AllCategories />
          <SelectOrder />
        </Box>
      </Wrapper>
    </Box>
  )
}

export default FeaturedCoursesScreen
