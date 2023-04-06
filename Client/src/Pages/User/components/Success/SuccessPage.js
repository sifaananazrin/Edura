import React from 'react';
import { Typography, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import successPageStyles from './successPageStyles';
import {Link} from 'react-router-dom';

function SuccessPage() {
  const classes = successPageStyles();

  return (
    <div className={classes.root}>
      <CheckCircleIcon className={classes.icon} />
      <Typography variant="h4" className={classes.title}>
        Payment Successful
      </Typography>
      <Typography variant="body1" className={classes.message}>
        Thank you for your payment. Your transaction has been processed successfully.
      </Typography>
      <Link to="/user/home">
      <Button variant="contained" color="primary" className={classes.button}>
        Return to Dashboard
      </Button>
      </Link>
    </div>
  );
}

export default SuccessPage;
