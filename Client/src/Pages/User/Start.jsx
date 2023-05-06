import React, { useContext } from "react";
import { QuizContext } from "../../redux/QuizContext.js";
import { useLocation } from "react-router-dom";

export default function Start() {
  const location = useLocation();
  const courseId = location.state.courseId;
  const { setStart, setCourseId } = useContext(QuizContext);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        onClick={() => {
          setCourseId(courseId);
          setStart(true);
        }}
        className="border border-orange-500 p-3 text-5xl rounded"
      >
        Start
      </button>
    </div>
  );
}
