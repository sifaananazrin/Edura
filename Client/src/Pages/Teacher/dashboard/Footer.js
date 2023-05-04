import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './FooterStyle';

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
