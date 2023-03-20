import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

//IMPORTING SVG'S
import aprove from '../../assets/aprove.svg'
import close_item from '../../assets/close-item-list.svg'

import styles from './styles'

const CurentlyFeatured = () => {
  return (
    <Box sx={{ pt: '96px' }}>
      <Typography variant='h1' textAlign='center'>
        featured course
      </Typography>
      <Typography variant='h2' textAlign='center' sx={styles.subTitle}>
        curntly featured
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ justifyContent: 'center' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={styles.card}>
            <Typography sx={styles.titleCard}>basic Pack</Typography>
            <Divider sx={styles.dividerCard} />
            <List>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />3 HD video lessons &
                tutorials
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Official exam
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                100 Practice questions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Month subscriptions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Free book
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                Practice quizes & assignments
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={close_item} />
                In depth explanations
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={close_item} />
                Personal instructor Assitance
              </ListItem>
            </List>
            <Typography sx={styles.price}>$000</Typography>
            <Button sx={styles.btnCard}>Purchase Course</Button>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={styles.card}>
            <Typography sx={styles.titleCard}>Standard Pack</Typography>
            <Divider sx={styles.dividerCard} />
            <List>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />3 HD video lessons &
                tutorials
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Official exam
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                100 Practice questions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Month subscriptions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Free book
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                Practice quizes & assignments
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={close_item} />
                In depth explanations
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={close_item} />
                Personal instructor Assitance
              </ListItem>
            </List>
            <Typography sx={styles.price}>$000</Typography>
            <Button sx={styles.btnCard}>Purchase Course</Button>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Card sx={styles.card}>
            <Typography sx={styles.titleCard}>premium Pack</Typography>
            <Divider sx={styles.dividerCard} />
            <List>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />3 HD video lessons &
                tutorials
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Official exam
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                100 Practice questions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Month subscriptions
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />1 Free book
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                Practice quizes & assignments
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                In depth explanations
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Box component='img' src={aprove} />
                Personal instructor Assitance
              </ListItem>
            </List>
            <Typography sx={styles.price}>$000</Typography>
            <Button sx={styles.btnCard}>Purchase Course</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CurentlyFeatured
