import benefits_bg from '../../assets/benefits_bg.svg'
import benefits_bg_1 from '../../assets/benefits_bg_1.svg'

const styles = {
  benefits: (theme) => ({
    background: '#9980B7',
    p: '50px 20px',
    [theme.breakpoints.up('lg')]: {
      marginY: '40px',
    },
  }),
  wrapper: (theme) => ({
    maxWidth: '1240px',
    margin: 'auto',
    paddingTop: '120px',
    paddingBottom: '390px',
    background: `url(${benefits_bg}) right 0 bottom 10px no-repeat,url(${benefits_bg_1}) left top no-repeat`,
    [theme.breakpoints.up('lg')]: {
      paddingY: '50px',
      background: `url(${benefits_bg}) right 80px bottom 10px no-repeat,url(${benefits_bg_1}) left top no-repeat`,
    },
  }),
  info: (theme) => ({
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
      textAlign: 'initial',
    },
  }),

  title: (theme) => ({
    mt: '48px',
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#fff',
    [theme.breakpoints.up('lg')]: {
      mt: 'initial',
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 700,
      maxWidth: '459px',
    },
  }),
  boxInfoItem: (theme) => ({
    mt: '24px',
    '&>img': {
      mr: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
  boxInfoItemTitle: {
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: 700,
    color: '#fff',
  },
  boxInfoItemText: (theme) => ({
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#fff',
    margin: '12px auto',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'initial',
      maxWidth: '360px',
    },
  }),
}

export default styles
