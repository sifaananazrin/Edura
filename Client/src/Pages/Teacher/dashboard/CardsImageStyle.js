import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    maxWidth: '800px',
  },
  media: {
    minWidth: '250px', // increase the width to 250px
    minHeight: '200px',
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '16px',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginTop: '8px',
    fontSize: 16,
  },
});

export default useStyles;
