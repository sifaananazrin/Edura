import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // marginTop: theme.spacing(4),
    },
    form: {
      width: "100%",
      // marginTop: theme.spacing(2),
    },
    submitButton: {
      // margin: theme.spacing(3, 0, 2),
    },
  }));


  export default useStyles;