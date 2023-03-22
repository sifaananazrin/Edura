import React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

//IMPORTING ICONS
import SearchIcon from '@mui/icons-material/Search'

const styles = {
  paper: {
    p: '2px 4px',
    alignItems: 'center',
    width: 275,
    display: { xs: 'none', lg: 'flex' },
  },
  inputBase: {
    ml: 1,
    flex: 1,
  },
}
const SearchInput = () => {
  return (
    <Paper component='form' sx={styles.paper}>
      <InputBase
        sx={styles.inputBase}
        placeholder='Search'
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput
