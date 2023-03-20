import img_bg from '../../assets/images.png'

const styles = {
  subscribe: {
    p: '100px 20px 100px',
  },
  wrapper: (theme) => ({
    boxSizing: 'border-box',
    maxWidth: '1240px',
    margin: 'auto',
    background: `#673F86 url(${img_bg}) no-repeat center`,
    borderRadius: '20px',
    p: '48px 5px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      padding: '48px',
    },
  }),
  title: (theme) => ({
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
      lineHeight: '44px',
      marginTop: '48px',
    },
  }),
  text: (theme) => ({
    marginTop: '12px',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#fff',
    [theme.breakpoints.up('md')]: {
      marginTop: '24px',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
    },
  }),
  btn: (theme) => ({
    textTransform: 'capitalize',
    background: '#9980B7',
    borderRadius: '8px',
    fontSize: '20px',
    lineHeight: '24px',
    width: '100%',
    p: '26px',
    color: '#FFFFFF',
    marginTop: '12px',
    [theme.breakpoints.up('md')]: {
      borderRadius: '0px 8px 8px 0px',
      width: 'initial',
      marginTop: 'initial',
    },
  }),
  paper: (theme) => ({
    m: '20px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'none',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      width: '670px',
    },
  }),
  inputBase: (theme) => ({
    p: '19px',
    background: '#fff',
    width: '100%',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    borderRadius: '8px',
    [theme.breakpoints.up('md')]: {
      borderRadius: '8px 0 0 8px',
    },
  }),
}

export default styles
