const styles = {
  wrapper: (theme) => ({
    marginTop: '24px',
    [theme.breakpoints.up('md')]: { marginTop: '48px' },
  }),
  title: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#0A033C',
  },
  text: {
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000',
    marginTop: '12px',
  },
}

export default styles
