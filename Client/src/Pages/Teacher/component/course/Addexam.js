// import React from "react";
// import { useEffect,useState} from "react";
// import {
//   Container,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   InputLabel,
//   Input,
//   makeStyles,
// } from "@material-ui/core";
// import { useLocation ,useNavigate} from 'react-router-dom';
// // import useStyles from "./CourseFormStyle"
// import {config} from "../../../../Helpers/axiosTeacherEndpoints"
// import axios from "../../../../api/axios"
// import Spinner from '../../../../component/Spinner';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';

// const Addexam = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const cid = location.state.courseId;
//   // console.log(selected)
//   const intialValues = {
//     list: "",
//   };

//   const [loading, setLoading] = useState(false);
//   const [formList, setFormList] = useState([]);
//   const [formValues, setFormValues] = useState(intialValues);

//   const handleListChange = (event) => {
//     const { value } = event.target;
//     setFormValues({ ...formValues, list: value });
//     // setFormValues({ ...formValues, list: value });
//   };

//   const handleAddList = (event) => {
//     event.preventDefault();
//     if (formValues.list.trim() !== "" && formList.length < 4) {
//       setFormList([...formList, formValues.list]);
//       setFormValues({ ...formValues, list: "" });
//     }
//   };

//   const handleDelete = (id) => {
//     const ListFilter = formList.filter((list, index) => {
//       return id !== index;
//     });
//     setFormList(ListFilter);
//   };

//   const renderedList = formList.map((list, index) => {
//     return (
//       <li
//         key={index}
//         className="bg-gray-100 flex  justify-between items-center py-2 px-4 rounded-lg mb-4"
//       >
//         <span className="text-gray-600 mr-4">{list.list}</span>
//         <span className="text-gray-500 cursor-pointer hover:text-red-500">
//         <IconButton onClick={() => handleDelete(index)}>
//           <DeleteIcon />
//         </IconButton>
//         </span>
//       </li>
//     );
//   });
//   const formData = {
//     courseId: cid,
//     list: formList,
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = {
//       courseId: cid,
//       list: formList,
//     };

//     setLoading(true);

//     axios.post('/teacher/exam', formData, config)
//       .then((response) => {
//         setLoading(false);
//         // console.log(response);
//         navigate('/teacher/course');
//         // Do something with the response data
//       })
//       .catch((error) => {
//         setLoading(false);
//         console.log(error);
//         // Handle the error
//       });
//   };

//   return (

//     <>
//     {loading ? (
//       <Spinner loading={loading} />
//     ) : (
//     <Container maxWidth="sm">
//       <div>
//         <h2>Add exam </h2>
//         <form  noValidate onSubmit={handleSubmit}>
//         <label htmlFor="question-input" className="block font-medium text-lg mb-2">
//   Question:
// </label>
// <input
//   id="question-input"
//   type="text"
//   className="block w-full p-3 rounded-md border border-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//   placeholder="Enter question here"
// />

//         <TextField
//             name="list"
//             className="rounded-lg shadow-md border-gray-400 appearance-none border w-[400px] py-2 px-3  text-black leading-tight focus:outline-none focus:shadow-outline"
//             type="text"
//             label="Answers"
//             value={formValues.list}
//             onChange={handleListChange}
//             placeholder="Enter option"
//           />
//           <button
//             onClick={handleAddList}
//             className="bg-custom-gym  text-white font-bold ml-6 py-2 px-6 rounded focus:outline-none focus:shadow-outline hover:bg-custom-head"
//           >
//             Add
//           </button>

//           <ul className="mt-3 max-h-24 overflow-y-auto scrollbar-thumb-black scrollbar-track-black">
//             {renderedList}
//           </ul>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"

//             style={{ backgroundColor: "#930050", color: "white" }}
//           >
//             Create
//           </Button>
//         </form>
//       </div>
//     </Container>

// )}
// </>
//   );
// };

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
