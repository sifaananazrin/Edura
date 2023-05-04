// styles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '0px',
    [theme.breakpoints.up('md')]: {
      paddingTop: '150px',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
   
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
}));

export default useStyles;
