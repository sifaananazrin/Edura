const styles = {
  wrapper: (theme) => ({
    marginTop: '14px',
    [theme.breakpoints.up('md')]: {
      marginTop: '48px',
    },
  }),
  icon: {
    width: '10px',
    height: '10px',
    color: '#673F86',
    marginRight: '8px',
  },
  title: {
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 500,
  },
  listItem: (theme) => ({
    padding: '6px 0',
    color: '#5D5A6F',
    fontSize: '14px',
    lineHeight: '17px',

    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  }),
}

export default styles
