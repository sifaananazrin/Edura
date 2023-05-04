import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
  },
  table: {
    minWidth: 650,
  },
  actionButton: {
    marginLeft: '5px',
    marginRight: '5px',
    fontSize: '12px',
    padding: '6px 12px',
  },
});

export default useStyles;
