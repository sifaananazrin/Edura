import { makeStyles } from '@material-ui/core/styles';

const successPageStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  icon: {
    fontSize: 80,
    color: theme.palette.success.main,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  message: {
    marginBottom: theme.spacing(4),
  },
  button: {
    textTransform: 'none',
  },
}));

export default successPageStyles;
