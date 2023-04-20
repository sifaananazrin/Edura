import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="body1" align="center">
        © 2023 ABC
      </Typography>
      <Typography variant="body2" align="center">
        Made with love by <Link href="#" className={classes.link}>SN</Link>
      </Typography>
    </div>
  );
}

export default Footer;
