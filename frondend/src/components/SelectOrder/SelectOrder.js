import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'

//IMPORTING ICONS AND IMAGES
import arrow from '../../assets/arrow_down.svg'
import card_title_img from '../../assets/card_title_img.png'
import DescriptionIcon from '@mui/icons-material/Description'
import GroupsIcon from '@mui/icons-material/Groups'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'

import styles from './styles'

const SelectOrder = () => {
  return (
    <Box sx={{ pt: '90px', flex: 1 }}>
      <Typography sx={styles.title}>
        select order
        <Box component='img' src={arrow} />
      </Typography>
      <Box sx={styles.wrapperCard}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => {
          return (
            <Card sx={styles.card} key={index}>
              <Box sx={{ p: '24px' }}>
                <Box sx={styles.blockImageAndPrice}>
                  <Box>
                    <Box component='img' src={card_title_img} />
                    <Box sx={styles.priceCard}>$00</Box>
                  </Box>
                </Box>

                <Typography sx={styles.titleCard}>Language Writing</Typography>
                <Box sx={styles.wrapperInfo}>
                  <Typography sx={styles.titleCardInfo}>
                    <DescriptionIcon sx={styles.icon} />
                    lessons
                  </Typography>
                  <Typography sx={styles.titleCardInfo}>
                    <GroupsIcon sx={styles.icon} />
                    59
                  </Typography>
                </Box>
              </Box>
              <Box sx={styles.wrapperRating}>
                <Rating name='read-only' value={5} readOnly />
                <ArrowCircleRightIcon sx={styles.iconRightArrow} />
              </Box>
            </Card>
          )
        })}
      </Box>
    </Box>
  )
}

export default SelectOrder
