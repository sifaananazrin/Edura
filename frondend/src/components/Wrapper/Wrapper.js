import React from 'react'
import Box from '@mui/material/Box'

const styles = {
  wrapper: {
    maxWidth: '1240px',
    margin: 'auto',
    p: '20px',
  },
}

const Wrapper = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>
}

export default Wrapper
