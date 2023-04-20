import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import PhoneImage from '../assets/phone-image.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  phoneImage: {
    width: '50%',
    maxWidth: '400px',
    marginBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
    fontSize: '2rem',
    textAlign: 'center',
  },
  description: {
    marginBottom: theme.spacing(4),
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

function ErrorPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   
  <img src="https://cdn0.iconfinder.com/data/icons/flat-and-simple-part-6/128/phone_cross-512.png" alt="Phone" className={classes.phoneImage} />


      <Typography variant="h1" className={classes.title}>
       Failed
      </Typography>
      <Typography variant="h4" className={classes.description}>
        Something went wrong. Please try again later.
      </Typography>
      
      <Button variant="contained" className={classes.button}>
        Go back to Home
      </Button>
    </div>
  );
}

export default ErrorPage;
