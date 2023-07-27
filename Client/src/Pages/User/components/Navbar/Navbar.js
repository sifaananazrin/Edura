import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

//IMPORTING SVG'S
import whiteArrow from '../../../../assets/chevron-down-white.svg'
import arrow from '../../../../assets/chevron-down.svg'

import styles from './styles'


import { Link } from 'react-router-dom';

const pages = [
  { title: 'Home', arrow: false ,link: '/user/home'},
  // { title: 'About', arrow: false },
  { title: 'My Course', arrow: true, link: '/user/oders' },
  // { title: 'Logout', arrow: false },
  // { title: 'Contact', arrow: false },
];

const Navbar = ({ white }) => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/user/login'; // redirect to login page after logout
  };
  const filteredPages = pages.filter(page => page.title !== 'Logout')
  const token = localStorage.getItem('usertoken');

  return (
    <Box sx={styles.navbar}>
      {filteredPages.map((page) => (
        <Button
          key={page.title}
          variant="text"
          sx={{ ...styles.link, color: white ? '#fff' : '#000' }}
        >
          {page.link ? (
            <Link to={page.link} style={{ textDecoration: 'none', color: white ? '#fff' : '#000' }}>
              {page.title}
            </Link>
          ) : (
            <span>{page.title}</span>
          )}
        </Button>
      ))}
      {token && (
        <Button
          key='Logout'
          onClick={handleLogout}
          variant="contained"
          sx={{
            ...styles.link,
            color: white ? '#fff' : '#000',
            marginLeft: 'auto',
          }}
        >
          Logout
        </Button>
      )}
    </Box>
  )
}

export default Navbar
