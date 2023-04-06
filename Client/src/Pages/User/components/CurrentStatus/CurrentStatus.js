import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
// import Link from '@mui/material/Link'
import {useNavigate} from "react-router-dom"
import styles from './styles'

const CurrentStatus = ({price,name,image}) => {
 
  // name, totalAmount,paymethod,uid,image
  const navigate = useNavigate();
  function bookNow() {
  
    const data = {
      // user: user,
      name: name,
      image:image, 
      totalAmount: price
    };
    navigate("/user/payment", { state: data });
    
  }


  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>current status</Typography>
        <Button onClick={bookNow}>Buy Now</Button>
      </Box>
      <Divider orientation='vertical' sx={styles.divider} />
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>Price</Typography>
        <Typography sx={styles.price}>Rs{price}</Typography>
      </Box>
      {/* <Divider orientation='vertical' sx={styles.divider} /> */}
      {/* <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>get started</Typography>
        <Button sx={styles.btn}>take this course</Button>
        <Typography sx={styles.loginLink}>
          Or <Link sx={styles.link}>Login</Link>
        </Typography>
      </Box> */}
    </Box>
  )
}

export default CurrentStatus
