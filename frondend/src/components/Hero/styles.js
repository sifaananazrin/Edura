import banner_bg from '../../assets/banner_bg.svg'
import banner_bg_mob from '../../assets/banner_bg_mob.svg'
import banner_circle_bg from '../../assets/banner_circle_bg.svg'

const styles = {
  hero: (theme) => ({
    position: 'relative',
    p: '23px 20px 100px',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '1770px',
      maxHeight: '1770px',
      background: `url(${banner_bg_mob}) no-repeat`,
      backgroundSize: 'cover',
      [theme.breakpoints.up('lg')]: {
        background: `url(${banner_bg}) no-repeat,url(${banner_circle_bg}) no-repeat`,
        height: '990px',
        maxHeight: '990px',
        backgroundSize: 'cover',
      },
      [theme.breakpoints.up('sm')]: {
        background: `url(${banner_bg}) no-repeat`,
        height: '1500px',
        maxHeight: '1500px',
        backgroundSize: 'cover',
      },
    },
  }),
  imgBanner: (theme) => ({
    zIndex: 2,
    maxHeight: '488px',
    position: 'relative',
    width: '100%',
    maxWidth: '375px',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'initial',
      width: 'initial',
    },
  }),
  info: (theme) => ({
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '70px',
    },
  }),
  title: (theme) => ({
    color: '#fff',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '29px',
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '59px',
    },
  }),
  text: (theme) => ({
    color: '#fff',
    fontSize: '14px',
    lineHeight: '17px',
    mt: '48px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      lineHeight: '22px',
    },
  }),
  wrapperBtn: (theme) => ({
    mt: '48px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'left',
    },
  }),
  link: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#fff',
    textDecoration: 'none',
    justifyContent: 'center',
    mr: '48px',
    '&>img': {
      mr: '10px',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'initial',
    },
  }),
  viewBtn: (theme) => ({
    margin: '14px auto',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      margin: 'initial',
      display: 'inherit',
    },
  }),
  blockCards: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: '65px',
    mt: '46px',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    '&:after': {
      background: 'none',
      [theme.breakpoints.up('lg')]: {
        content: "''",
        position: 'absolute',
        right: '-50px',
        bottom: '-100px',
        width: '250px',
        height: '412px',
        maxHeight: '412px',
        backgroundSize: 'cover',
        background: `url(${banner_circle_bg}) no-repeat`,
      },
    },
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'initial',
      alignItems: 'initial',
    },
    [theme.breakpoints.up('md')]: {
      mt: '95px',
      gap: '130px',
    },
  }),
  card: {
    textAlign: 'center',
    boxShadow: 'none',
    p: '28px',
    boxSizing: 'border-box',
    border: '1px solid #9980B7',
    backdropFilter: 'blur(4px)',
    borderRadius: '8px',
    width: '185px',
  },
  content: {
    m: '8px 0',
    color: '#673F86',
    fontSize: '24px',
    lineHeight: '29px',
  },
  subContent: {
    color: '#673F86',
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: 500,
  },
}

export default styles
