const styles = {
  title: {
    marginTopt: '20px',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '24px',
    textTransform: 'capitalize',
    color: '#000000',
    marginBottom: '14px',
  },
  blockInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '14px',
  },
  divider: {
    margin: 0.5,
    borderColor: '#673F86',
    borderBottomWidth: '2px',
    height: 'initial',
  },
  link: {
    fontSize: '20px',
    lineHeight: '24px',
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    marginLeft: '5px',
    color: '#673F86',
  },
  loginLink: {
    margin: '18px 0',
    fontSize: '20px',
    lineHeight: '24px',
  },
  btn: {
    whiteSpace: 'pre',
    fontSize: '16px',
    lineHeight: '20px',
  },
  price: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '44px',
  },
  wrapper: (theme) => ({
    background: '#E7E7E7',
    borderRadius: '4px',
    margin: '38px auto 0',
    padding: '24px',
    maxWidth: '218px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '48px',
      maxWidth: 'initial',
      width: '100%',
      boxSizing: 'border-box',
    },
  }),
}

export default styles
