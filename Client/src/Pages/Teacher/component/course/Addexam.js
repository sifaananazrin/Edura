

import { useState } from "react";
import { useLocation ,useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "../../../../api/axios";
export default function QuizForm() {


  const navigate = useNavigate();
  const location = useLocation();
   const cid = location.state.courseId;
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newQuestion = {
      question,
      options: [optionA, optionB, optionC, optionD],
      correctOption,
    };
    setQuestions([...questions, newQuestion]);
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCorrectOption("");

    try {
      const response = await axios.post("/teacher/exam", {
        courseId:cid,
        question,
        a: optionA,
        b: optionB,
        c: optionC,
        d: optionD,
        correct: correctOption,
      });
      if (response.status === 201) {
        toast.success(response.data.message);
      } else if (response.status === 200) {
        toast.error(response.data.message);
      }
      setQuestions([...questions, newQuestion]);
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectOption("");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="question" className="block font-medium text-lg mb-2">
            Question:
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Enter question"
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="optionA" className="block font-medium text-lg mb-2">
            Option A:
          </label>
          <input
            id="optionA"
            type="text"
            value={optionA}
            onChange={(event) => setOptionA(event.target.value)}
            placeholder="Option A"
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="optionB" className="block font-medium text-lg mb-2">
            Option B:
          </label>
          <input
            id="optionB"
            type="text"
            value={optionB}
            onChange={(event) => setOptionB(event.target.value)}
            placeholder="Option B"
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="optionC" className="block font-medium text-lg mb-2">
            Option C:
          </label>
          <input
            id="optionC"
            type="text"
            value={optionC}
            onChange={(event) => setOptionC(event.target.value)}
            placeholder="Option C"
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="optionD" className="block font-medium text-lg mb-2">
            Option D:
          </label>
          <input
            id="optionD"
            type="text"
            value={optionD}
            onChange={(event) => setOptionD(event.target.value)}
            placeholder="Option D"
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="optionD" className="block font-medium text-lg mb-2">
            Correct Option:
          </label>
          <select
            value={correctOption}
            onChange={(event) => setCorrectOption(event.target.value)}
            className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
            <option value="d">Option D</option>
          </select>
        </div>

        <div>
  <button
    type="submit"
    className="w-full py-3 rounded-md bg-blue-500 text-white font-medium mb-2"
  >
    Add Question
  </button>
  <button
  onClick={()=>{
    navigate("/teacher/course")
  }}
    className="w-full py-3 rounded-md bg-blue-500 text-white font-medium"
  >
    Back
  </button>
</div>

      </form>
    </div>
  );
}
