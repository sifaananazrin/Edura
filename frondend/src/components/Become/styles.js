const styles = {
  become: {
    padding: '100px 20px',
  },

  title: {
    fontWeight: 700,
  },
  text: (theme) => ({
    mt: '24px',
    [theme.breakpoints.up('md')]: {
      mt: '48px',
    },
  }),
  info: (theme) => ({
    mt: '24px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
      mt: 'initial',
    },
  }),
  btn: (theme) => ({
    margin: '44px auto',
    [theme.breakpoints.up('md')]: {
      mt: '95px',
    },
  }),
}

export default styles
