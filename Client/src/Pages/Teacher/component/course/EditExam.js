import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../../../../api/axios";
import {config} from "../../../../Helpers/axiosTeacherEndpoints"

export default function EditExam() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const selected = location.state.selected;
  // console.log(selected)
  const data = selected?.quiz || {}; 
  // console.log(data)// Add a fallback value for data
  const [question, setQuestion] = useState(data.question || ""); // Provide a default value for question
  const [optionA, setOptionA] = useState(data.a || "");
  const [optionB, setOptionB] = useState(data.b || "");
  const [optionC, setOptionC] = useState(data.c || "");
  const [optionD, setOptionD] = useState(data.d || "");
  const [correctOption, setCorrectOption] = useState(data.correct || "");
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    setQuestion(data.question || "");
    setOptionA(data.a || "");
    setOptionB(data.b || "");
    setOptionC(data.c || "");
    setOptionD(data.d || "");
    setCorrectOption(data.correct || "");
  }, [data]);


  const handleSubmit = async (id,event) => {
    event.preventDefault();
    // console.log(question);
    // console.log(optionA);
    // console.log(optionB);
    // console.log(optionC);
    // console.log(optionD);
    // console.log(correctOption);
    
 
    try {
  
      const response = await axios.put(`/teacher/editexamdata/${id}`, {
        courseId: data.courseId,
        question,
        a: optionA,
        b: optionB,
        c: optionC,
        d: optionD,
        correct: correctOption,
      },config);
      if (response.status === 200) {
        toast.success(response.data.message);
      } else if (response.status === 500) {
        toast.error(response.data.message);
      }
      navigate(`/teacher/viewexam/${data.courseId}`)
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
      <form className="space-y-4">
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

    className="w-full py-3 rounded-md bg-blue-500 text-white font-medium mb-2"
    onClick={(event) => handleSubmit(data._id,event)}
  >
    Edit Question
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
