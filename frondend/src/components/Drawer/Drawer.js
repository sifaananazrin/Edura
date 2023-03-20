import React from 'react'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import close from '../../assets/close.svg'
import Navbar from '../Navbar'

const Drawer = ({ open, onClose }) => {
  return (
    <MuiDrawer
      anchor={'left'}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: '100%' }, zIndex: 4 }}
    >
      <Box sx={{ p: '20px' }}>
        <IconButton onClick={onClose} sx={{ p: 0 }}>
          <Box component='img' src={close} />
        </IconButton>
        <Box sx={{ mt: '24px' }}>
          <Navbar />
        </Box>
      </Box>
    </MuiDrawer>
  )
}

export default Drawer
