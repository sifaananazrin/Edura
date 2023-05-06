
// import styled from 'styled-components';

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Form = styled.form`
//   width: 100%;
// `;

// const SubmitButton = styled.button`
//   /* styles for button */
// `;

// export { FormContainer, Form, SubmitButton };

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4)
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;
