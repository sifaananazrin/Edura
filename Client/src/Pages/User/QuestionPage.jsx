import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../../redux/QuizContext.js";
import axios from "../../api/axios.js";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Box current={current} next={setCurrent} />
    </div>
  );
}

const Box = ({ current, next }) => {
  const { correct, setCorrect, setExit, courseId, setQuizzCount } = useContext(QuizContext);
  const [quizzes, setQuizzes] = useState([]);
  console.log(courseId);
  // const courseId = "64415b71a5d7d5de9d9e2b32";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/exam?courseId=${courseId}`);
        setQuizzes(response.data.found);
        console.log(quizzes);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [courseId]);

  const [ans, setAns] = useState("");
  const saveHandler = () => {
    if (quizzes[current]?.correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setQuizzCount(quizzes.length);
      setExit(true);
    } else {
      next(current + 1);
    }
  };
  return (
    <>
      {quizzes && (
        <div className="w-[40%] border shadow-lg rounded-md overflow-hidden">
          <div className="p-2 text-3xl">
            {current + 1} {quizzes[current]?.question}
          </div>
          <div className="grid grid-cols-2 mt-3">
            <div
              className={`p-2 border ${
                ans === "a" ? "bg-blue-400 text-white" : ""
              } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
              onClick={() => setAns("a")}
            >
              {quizzes[current]?.a}
            </div>
            <div
              className={`p-2 border ${
                ans === "b" ? "bg-blue-400 text-white" : ""
              } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
              onClick={() => setAns("b")}
            >
              {quizzes[current]?.b}
            </div>
            <div
              className={`p-2 border ${
                ans === "c" ? "bg-blue-400 text-white" : ""
              } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
              onClick={() => setAns("c")}
            >
              {quizzes[current]?.c}
            </div>
            <div
              className={`p-2 border ${
                ans === "d" ? "bg-blue-400 text-white" : ""
              } hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`}
              onClick={() => setAns("d")}
            >
              {quizzes[current]?.d}
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className="cursor-pointer h-[30px] px-3  bg-orange-500 text-white"
              onClick={() => setAns("")}
            >
              Reset
            </div>
            <div
              className="cursor-pointer h-[30px] px-3 bg-green-500 text-white"
              onClick={saveHandler}
            >
              Save & Next
            </div>
            <div
              className="cursor-pointer h-[30px] px-3 bg-red-500 text-white"
              onClick={() => {
                setQuizzCount(quizzes.length);
                setExit(true);
              }}
            >
              Exit
            </div>
          </div>
        </div>
      )}
    </>
  );
};
