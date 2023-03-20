const styles = {
  subTitle: {
    mb: '48px',
    mt: '24px',
  },
  titleCard: {
    color: '#0A033C',
    textAlign: 'center',
    fontSize: '24px',
    lineHeight: '29px',
    textTransform: 'capitalize',
  },
  card: (theme) => ({
    p: '48px 24px 24px',
    boxSizing: 'border-box',
    [theme.breakpoints.up('lg')]: {
      maxWidth: '403px',
    },
  }),
  dividerCard: {
    maxWidth: '265px',
    margin: '14px auto',
    borderColor: '#E7E7E7',
  },
  listItem: {
    pl: '0',
    '&>img': {
      mr: '14px',
    },
  },
  price: {
    color: '#0A033C',
    fontSize: '20px',
    lineHeight: '24px',
    mt: '28px',
  },

  btnCard: {
    p: '14px',
    width: '100%',
    background: '#673F86',
    borderRadius: '4px',
    mt: '30px',
    color: '#fff',
  },
}

export default styles
