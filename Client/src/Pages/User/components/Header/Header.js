import { useState } from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';




// import SearchInput from '../SearchInput'
import Navbar from '../Navbar'
import Drawer from '../Drawer'

//IMPORTING SVG'S
import logo_desk from '../../../../assets/logo.svg'
import logo_mob from '../../../../assets/logo-mobile.svg'
import shopping_cart from '../../../../assets/shopping-cart.svg'
import user_info from '../../../../assets/user-info.svg'
// import { useSelector, useDispatch } from 'react-redux'
// import { authActions } from '../../../../redux/store'

// import axios from "axios"
// axios.defaults.withCredentials=true

const styles = {
  appBar: (theme) => ({
    background: `${theme.palette.purpleDark.main}`,
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
      padding: '48px 0',
    },
  }),
}

const Header = () => {
  // const dispatch = useDispatch();
  // const isLoggedIn=useSelector(state=> state.isLoggedIn)
  // const sendLogoutReq=async ()=>{
  //   const res = await axios.post("http://localhost:5000/api/logout",null,{
  //     withCredentials:true
  //   })
  //   if(res.status === 200){
  //     return res
  //   }
  //   return new Error("Unable To Logout Please try again")
  // }
  // const handleLogout=()=>{
  //   sendLogoutReq().then(() => {
  //     dispatch(authActions.logout());
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }
  
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl'>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box component='img' src={logo_desk} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <Box component='img' src={logo_mob} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', lg: 'flex' },
              paddingLeft: '80px',
            }}
          >
            <Navbar white />
          </Box>
          {/* <SearchInput /> */}

          <Box sx={{ display: 'flex' }}>
            <IconButton>
           
              <Link to='/user/oders'>
              <Box component='img' src={shopping_cart} />
  </Link>
            </IconButton>
            <IconButton sx={{ display: { xs: 'none', lg: 'block' } }}>
  <Link to='/user/profile'>
    <Box component='img' src={user_info} />
  </Link>
</IconButton>
            {/* {isLoggedIn && (
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    )} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
