const styles = {
  wrapperCard: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px 16px',
    mt: '36px',
    [theme.breakpoints.up('md')]: {
      mt: '96px',
    },
  }),
  card: (theme) => ({
    border: '1px dashed #9980B7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    position: 'relative',
    overflow: 'visible',
    pt: '180px',
    boxSizing: 'border-box',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      maxWidth: '298px',
    },
  }),
  blockImageAndPrice: {
    position: 'absolute',
    top: '-25px',
    left: 'calc(50% - 125px)',
  },
  title: (theme) => ({
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    '&>img': {
      ml: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '24px',
      lineHeight: '29px',
      justifyContent: 'right',
    },
  }),
  priceCard: {
    p: '8px 3px',
    background: '#673F86',
    position: 'absolute',
    borderRadius: '11px',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#fff',
    bottom: '-15px',
    left: 'calc(50% - 18px)',
  },
  titleCard: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#000',
    mt: '20px',
  },
  icon: {
    width: '24px',
    height: '24px',
    color: '#673F86',
  },
  wrapperInfo: {
    display: 'flex',
    gap: '35px',
    mt: '24px',
  },
  titleCardInfo: {
    display: 'flex',
    gap: '20px',
    textTransform: 'capitalize',
    alignItems: 'center',
  },
  iconRightArrow: {
    width: '44px',
    height: '44px',
    color: '#673F86',
  },
  wrapperRating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px dashed #9980B7',
    p: '24px',
  },
}

export default styles
