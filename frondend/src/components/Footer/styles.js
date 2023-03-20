const styles = {
  footer: (theme) => ({
    padding: '44px 20px',
    background: '#673F86',
    [theme.breakpoints.up('lg')]: {
      padding: '96px 20px 44px',
    },
  }),

  wrapper: {
    maxWidth: '1240px',
    margin: 'auto',
  },
  links: {
    marginTop: '20px',
    marginLeft: '-8px',
  },
  icon: {
    width: '24px',
    height: '24px',
    color: '#fff',
  },
  itemList: (theme) => ({
    padding: '6px 0px',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#fff',
    textTransform: 'capitalize',
    [theme.breakpoints.up('lg')]: {
      padding: '12px 0',
      fontSize: '20px',
      lineHeight: '24px',
    },
  }),
  copyrightBlock: (theme) => ({
    marginTop: '40px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
  logo: {
    textAlign: 'center',
    display: 'block',
  },
  copyrightText: (theme) => ({
    marginTop: '14px',
    color: '#fff',
    fontWeight: 500,
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '20px',
    [theme.breakpoints.up('lg')]: {
      margin: '0 120px 0 77px',
    },
  }),
  nav: (theme) => ({
    marginTop: '12px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      padding: '14px',
    },
  }),
}

export default styles
