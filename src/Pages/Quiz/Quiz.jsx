import React, { useRef, useState } from "react";
import "./quiz.css";
import { data } from "./data";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(data[index]);
  const [answer, setAnswer] = useState(0);
  const [showAnswer, setshowAnswer] = useState(false);
  const [active, setActive] = useState(true);
  const [userName, setuserName] = useState("");

  const liRef1 = useRef(null);
  const liRef2 = useRef(null);
  const liRef3 = useRef(null);
  const liRef4 = useRef(null);

  // handleNext function to handle next functionality
  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex((prev) => ++prev);
      setQuestions(data[index + 1]);
      setActive(true);

      [liRef1, liRef2, liRef3, liRef4].map((ref) => {
        ref.current.classList.remove("successBorder");
        ref.current.classList.remove("wrong");
      });
    } else {
      setshowAnswer(true);
    }
  };

  // CheckAnswer function to check if answer is wrong or right
  const checkAnswer = (event, ans) => {
    if (!active) return;
    if (ans === questions.answer) {
      event.target.classList.add("successBorder");
      setAnswer((prevAns) => ++prevAns);
      setActive(false);
    } else {
      event.target.classList.add("wrong");
      setActive(false);
    }
  };
  return (
    <>
      <div className="w-full main_container h-screen flex justify-center items-center">
        <div className="main bg-white p-4 flex flex-col rounded-md gap-3">
          <h2>
            Q{index + 1}. {questions.question}
          </h2>
          <hr className="font-bold  bg-black" />
          <ol>
            <li
              className=" p-2 font-serif border m-2 hover:border-black hover:bg-slate-600 cursor-pointer "
              ref={liRef1}
              onClick={(e) => {
                checkAnswer(e, "A");
              }}
            >
              <span className="mx-2">A.</span>
              {questions.A}
            </li>
            <li
              className=" p-2 font-serif border m-2 hover:border-black hover:bg-slate-600 cursor-pointer"
              ref={liRef2}
              onClick={(e) => {
                checkAnswer(e, "B");
              }}
            >
              <span className="mx-2">B.</span>
              {questions.B}
            </li>
            <li
              className=" p-2 font-serif border m-2 hover:border-black hover:bg-slate-600 cursor-pointer"
              ref={liRef3}
              onClick={(e) => {
                checkAnswer(e, "C");
              }}
            >
              <span className="mx-2">C.</span>
              {questions.C}
            </li>
            <li
              className=" p-2 font-serif border m-2 hover:border-black hover:bg-slate-600 cursor-pointer"
              ref={liRef4}
              onClick={(e) => {
                checkAnswer(e, "D");
              }}
            >
              <span className="mx-2">D.</span>
              {questions.D}
            </li>
          </ol>
          <button
            className=" bg-blue-500 nextBtn w-1/4 rounded-md text-white font-bold py-2 m-auto"
            onClick={handleNext}
          >
            Next
          </button>
          {showAnswer && <h2>Your Correct Answer Was {answer}</h2>}
        </div>
      </div>
    </>
  );
};

export default Quiz;
