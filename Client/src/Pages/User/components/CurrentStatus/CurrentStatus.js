import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
// import Link from '@mui/material/Link'
import {useNavigate} from "react-router-dom"
import styles from './styles'

const CurrentStatus = ({price,name,image,teachername,link,course_id,puchase,teacherid,list }) => {
  
  // console.log(list)
  // name, totalAmount,paymethod,uid,image
  const navigate = useNavigate();
  function bookNow() {
  
    const data = {
      // user: user,
      course_id:course_id,
      link:link,
      teachername:teachername,
      name: name,
      teacherid:teacherid,
      image:image, 
      totalAmount: price,
       list :list ,
    };
    navigate("/user/payment", { state: data });
    
  }


  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>current status</Typography>
        {!puchase || !puchase=="true" ? (
        <Button onClick={bookNow}>Buy Now</Button>
      ) : (
        <p> <b>You have already purchased this course. check my course <br></br></b></p>
        
      )}
      </Box>

      {!puchase || !puchase=="true" ? (
        <>
      <Divider orientation='vertical' sx={styles.divider} />
      <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>Price</Typography>
        <Typography sx={styles.price}>Rs{price}</Typography>
      </Box>
      </>
        ) : (
          <Box sx={styles.blockInfo}>
            <Typography sx={styles.title}>Thank you for your purchase! </Typography>
          </Box>
        )}
      </Box>
    );
      {/* <Divider orientation='vertical' sx={styles.divider} /> */}
      {/* <Box sx={styles.blockInfo}>
        <Typography sx={styles.title}>get started</Typography>
        <Button sx={styles.btn}>take this course</Button>
        <Typography sx={styles.loginLink}>
          Or <Link sx={styles.link}>Login</Link>
        </Typography>
      </Box> */}
  
  
}

export default CurrentStatus
