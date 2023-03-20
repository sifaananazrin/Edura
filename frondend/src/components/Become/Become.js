import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Wrapper from '../Wrapper'

//IMPORTING SVG'S
import become_an_instructor from '../../assets/become_an_instructor.svg'
import photo_become from '../../assets/become.png'
import plus from '../../assets/plus_white.svg'

import styles from './styles'

const Become = () => {
  return (
    <Box sx={styles.become}>
      <Wrapper>
        <Box component='img' src={become_an_instructor} />
        <Box sx={styles.info}>
          <Box>
            <Typography variant='h2' sx={styles.title}>
              Become an Instructor
            </Typography>
            <Typography variant='body2' sx={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo,
              <br />
              <br />
              vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
              diam quis enim lobortis scelerisque fermentum dui faucibus in
              ornare quam viverra orci
            </Typography>
            <Button sx={styles.btn}>
              <Box component='img' src={plus} sx={{ mr: '14px' }} />{' '}
              <span>Apply now</span>
            </Button>
          </Box>
          <Box component='img' src={photo_become} sx={{ width: '100%' }} />
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Become
