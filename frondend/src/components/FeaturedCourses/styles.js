const styles = {
  wrapper: (theme) => ({
    maxWidth: '1240px',
    margin: 'auto',
    p: '350px 20px 24px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: '100px 20px',
    },
  }),
  content: (theme) => ({
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'initial',
    },
  }),
  topTitle: {
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 500,
    color: '#9980B7',
  },
  title: {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 500,
    color: '#9980B7',
  },
  btn: (theme) => ({
    m: '18px auto',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      m: 'initial',
      display: 'inherit',
    },
  }),
  divider: (theme) => ({
    display: 'none',
    [theme.breakpoints.up('md')]: {
      m: 0.5,
      display: 'block',
      color: '#9980B7',
      height: '118px',
    },
  }),
  text: (theme) => ({
    fontSize: '20px',
    lineHeight: '24px',
    color: '#9980B7',
    [theme.breakpoints.up('md')]: {
      ml: '24px',
      maxWidth: '450px',
    },
  }),
}

export default styles
