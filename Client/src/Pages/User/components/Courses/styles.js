const styles = {
  wrapper: (theme) => ({
    textAlign: 'center',
    marginTop: '24px',
    [theme.breakpoints.up('md')]: {
      marginTop: '48px',
      border: '1px solid #E7E7E7',
      borderRadius: '4px',
      padding: '48px 48px 24px',
      textAlign: 'left',
    },
  }),
  title: {
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 500,
  },
  listItem: (theme) => ({
    borderBottom: '1px dashed #686868',
    padding: '12px 0',
    color: '#000000',
    fontSize: '14px',
    lineHeight: '17px',
    justifyContent: 'center',
    '&:last-child': {
      borderBottom: 'none',
    },
    [theme.breakpoints.up('md')]: {
      padding: '24px 0',
      fontSize: '20px',
      lineHeight: '24px',
      justifyContent: 'left',
    },
  }),
}

export default styles
