import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

//IMPORTING SVG'S
import whiteArrow from '../../../../assets/chevron-down-white.svg'
import arrow from '../../../../assets/chevron-down.svg'

import styles from './styles'

const pages = [
  { title: 'Home', arrow: false },
  { title: 'About', arrow: false },
  { title: 'Course', arrow: true },
  // { title: 'Page', arrow: true },
  // { title: 'Blog', arrow: true },
  { title: 'Contact', arrow: false },
]

const Navbar = ({ white }) => {
  return (
    <Box sx={styles.navbar}>
      {pages.map((page) => (
        <Link
          key={page}
          sx={{ ...styles.link, color: white ? '#fff' : '#000' }}
        >
          {page.title}
          {page.arrow && (
            <Box
              component='img'
              src={white ? whiteArrow : arrow}
              sx={styles.arrow}
            />
          )}
        </Link>
      ))}
    </Box>
  )
}

export default Navbar
