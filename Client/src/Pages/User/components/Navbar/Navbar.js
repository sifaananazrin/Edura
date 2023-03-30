import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

//IMPORTING SVG'S
import whiteArrow from '../../../../assets/chevron-down-white.svg'
import arrow from '../../../../assets/chevron-down.svg'

import styles from './styles'

const pages = [
  { title: 'Home', arrow: false },
  { title: 'About', arrow: false },
  { title: 'Course', arrow: true },
  // { title: 'Logout', arrow: false },
  // { title: 'Contact', arrow: false },
]

const Navbar = ({ white }) => {
  const filteredPages = pages.filter(page => page.title !== 'Logout')

  return (
    <Box sx={styles.navbar}>
      {filteredPages.map((page) => (
        <Button
          key={page.title}
          variant="text"
          sx={{ ...styles.link, color: white ? '#fff' : '#000' }}
        >
          {page.title}
        </Button>
      ))}
      <Box sx={{ flexGrow: 1 }} />
      <Button
        key='Logout'
        variant="contained"
        sx={{
          ...styles.link,
          color: white ? '#fff' : '#000',
          marginLeft: 'auto',
        }}
      >
        Logout
      </Button>
    </Box>
  )
}

export default Navbar
