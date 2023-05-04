import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
    marginTop: theme.spacing(6), // increase the margin top to increase the height
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
