import Box from '@mui/material/Box'
import Footer from '../Footer'
import Header from '../Header'
import Subscribe from '../Subscribe'

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Subscribe />
      <Footer />
    </Box>
  )
}

export default Layout
