const styles = {
  wrapper: {
    maxWidth: '1240px',
    m: 'auto',
    p: '10px 20px',
  },
  card: {
    border: '0.5px solid #9980B7',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    p: '24px 24px 48px',
  },
  blockPhoto: {
    position: 'relative',
  },
  language: {
    position: 'absolute',
    background: '#673F86',
    borderRadius: '11px',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    p: '9px 24px',
    bottom: '-3px',
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: '24px',
  },
  price: {
    background: '#673F86',
    borderRadius: '11px',
    p: '8px',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 500,
    textDecorationLine: 'underline',
    textTransform: 'uppercase',
    color: '#000',
    '&>img': {
      mr: '10px',
    },
  },
  divider: {
    borderBottomWidth: 1,
    background: '#673F86',
  },
}

export default styles
