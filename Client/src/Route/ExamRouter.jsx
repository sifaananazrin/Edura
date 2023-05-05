import Quiz from '../Pages/User/QuestionPage';
import Result from "../Pages/User/Result";
import Start from "../Pages/User/Start";
import { QuizContext } from "../redux/QuizContext";
import { useContext } from "react";
function Exam() {
    const { start, exit } = useContext(QuizContext);
    return (
      <>
        {
          exit === false
            ?
            <>
              {
                start === true
                  ?
                  <Quiz />
                  :
                  <Start />
              }
            </>
            : <Result />
        }
  
        {/* <Result /> */}
      </>
    );
  }

  export default Exam;