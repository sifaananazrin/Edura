import { useState,useEffect } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../api/axios';
 import {config} from "../../Helpers/axiosUserEndpoints"
import {
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

function QuestionPage() {
  const classes = useStyles();
  const location = useLocation();
  const cid = location.state.courseId;
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
  
        const response = await axios.get("/api/exam", {
          params: { courseId: cid },
          headers: { Authorization: `${localStorage.usertoken}`},
        });
        setAnswer(response.data.found);
         console.log(response.data.found)
        // console.log(answer)
        // console.log(answer)
      } catch (error) {
        localStorage.removeItem("usertoken");
          localStorage.removeItem("uid");
        console.log(error);
      }
    }
  
    fetchData();
  }, []);

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(answer);
  };

  return (
<Container maxWidth="md" className={classes.container}>
  <Typography variant="h4" component="h1" align="center" gutterBottom>
    Exam Questions
  </Typography>
  <form className={classes.form} onSubmit={handleSubmit}>
  {Array.isArray(answer) && answer.map((question, index) => (
  <div key={index}>
    {question.list.map((q, i) => (
      <div key={`${index}-${i}`}>
        <Typography variant="h6" gutterBottom>
          {` ${i + 1}: ${q.list}`}
        </Typography>
        <TextField
          key={`${index}-${i}`}
          label={"Answer"}
          variant="outlined"
          value={answers[index]}
          className={classes.textField}
          required
          onChange={(event) => {
            const newAnswers = [...answers];
            newAnswers[index] = event.target.value;
            setAnswers(newAnswers);
          }}
        />
      </div>
    ))}
  </div>
))}


    <Button variant="contained" color="primary" type="submit">
      Submit
    </Button>
  </form>
</Container>



  
  );
}

export default QuestionPage;
