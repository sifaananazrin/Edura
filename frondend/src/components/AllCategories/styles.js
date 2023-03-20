const styles = {
  listItem: (theme) => ({
    p: '12px',
    justifyContent: 'center',
    borderBottom: '1px solid #686868',
    fontSize: '16px',
    lineHeight: '20px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '20px',
      lineHeight: '24px',
      p: '24px',
    },
  }),
  icon: {
    width: '24px',
    height: '24px',
    color: '#673F86',
  },
  card: {
    p: '48px 24px',
    borderRadius: '4px',
    border: '1px solid #E7E7E7',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  title: (theme) => ({
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 500,
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&>svg': {
      ml: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
      lineHeight: '29px',
    },
  }),
}

export default styles
