import { useRef, useEffect, useState } from "react";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import { motion } from "framer-motion";
import "./PlayButton.scss";

function BinarySearch() {
  let currentStep = useRef("row-start-1 row-end-2");
  let pointers = useRef([-1, -1, -1]);
  let startcol = useRef("invisible ");
  let endcol = useRef("invisible");
  let midcol = useRef("invisible");
  let intervalRef = useRef();
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const array = [15, 32, 40, 45, 46, 69, 79, 80, 95, 96];
  const IncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    if (isActive) {
      switch (counter) {
        case 1:
          currentStep.current = "row-start-2 row-end-3";
          pointers.current = [0, -1, -1];
          startcol.current = "col-start-8 max-md:col-start-4";
          break;
        case 2:
          currentStep.current = "row-start-3 row-end-4";
          pointers.current = [0, -1, 9];
          endcol.current = "col-start-26 max-md:col-start-31";
          break;
        case 3:
        case 8:
        case 14:
          currentStep.current = "row-start-4 row-end-5";
          break;
        case 4:
        case 9:
        case 15:
          currentStep.current = "row-start-5 row-end-6";
          pointers.current[1] = Math.floor(
            (pointers.current[0] + pointers.current[2]) / 2
          );
          switch (pointers.current[1]) {
            case 4:
              midcol.current = " col-start-16 max-md:col-start-16";
              break;
            case 1:
              midcol.current = "col-start-10 max-md:col-start-7";
              break;
            case 2:
              startcol.current = "invisible";
              midcol.current = "col-start-12 max-md:col-start-10";
              pointers.current = [-1, 2, -1];
              break;
            default:
              break;
          }
          break;
        case 5:
        case 10:
        case 16:
          currentStep.current = "row-start-6 row-end-7";
          break;
        case 17:
          if (pointers.current[1] === 2) {
            pointers.current = [-1, 2, -1];
            startcol.current = "invisible";
            endcol.current = "invisible";
            currentStep.current = "row-start-7 row-end-8";
          }
          break;
        case 18:
          setCounter(0);
          setIsActive((currentIsActive) => !currentIsActive);
          clearInterval(intervalRef.current);
          break;
        case 6:
        case 11:
          currentStep.current = "row-start-8 row-end-9";
          break;
        case 7:
          currentStep.current = "row-start-9 row-end-10";
          pointers.current = [0, 4, 3];
          endcol.current = "col-start-14 max-md:col-start-13";
          break;
        case 12:
          currentStep.current = "row-start-10 row-end-11";
          break;
        case 13:
          currentStep.current = "row-start-11 row-end-12";
          pointers.current = [2, 1, 3];
          startcol.current = "col-start-12 max-md:col-start-10";
          break;
        default:
          pointers.current = [-1, -1, -1];
          startcol.current = "invisible";
          endcol.current = "invisible";
          midcol.current = "invisible";
          currentStep.current = "row-start-1 row-end-2";
          break;
      }
      intervalRef.current = setInterval(IncreaseCounter, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, counter]);

  const HandlePlayClick = () => {
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(IncreaseCounter, 2000);
    }
    setIsActive((currentIsActive) => !currentIsActive);
  };

  const steps = [
    "def binary_search(sorted_array, target):",
    "  start = 0",
    "  end = len(sorted_array) - 1",
    "  while start <= end:",
    "    mid = (start+end) // 2",
    "    if sorted_array[mid] == target:",
    "      return mid",
    "    elif sorted_array[mid] > target:",
    "      end = mid - 1",
    "    else:",
    "      start = mid + 1",
    "  return -1",
  ];

  return (
    <>
      <div className="grid grid-rows-10 grid-cols-32 text-center text-3xl max-md:text-xl ">
        <div className="row-start-1 row-end-2 col-start-6 max-md:col-start-1 mt-auto col-span-2">
          <PlayButton handler={HandlePlayClick} isActive={isActive} />
        </div>
        <div className="row-start-1 row-end-2 col-start-8 max-md:col-start-4 col-span-2 mt-auto">
          {"[" + array[0]}
        </div>
        <div className="row-start-1 row-end-2 col-start-10 max-md:col-start-7 col-span-2 mt-auto">
          {array[1]}
        </div>
        <div className="row-start-1 rounded-full border-dotted border-2 border-red-300 row-end-2 col-start-12 max-md:col-start-10 col-span-2 mt-auto">
          {array[2]}
        </div>
        <div className="row-start-1 row-end-2 col-start-14 col-span-2 max-md:col-start-13 mt-auto">
          {array[3]}
        </div>
        <div className="row-start-1 row-end-2 col-start-16 col-span-2 max-md:col-start-16 mt-auto">
          {array[4]}
        </div>
        <div className="row-start-1 row-end-2 col-start-18 max-md:col-start-19 col-span-2 mt-auto">
          {array[5]}
        </div>
        <div className="row-start-1 row-end-2 col-start-20 max-md:col-start-22 col-span-2 mt-auto">
          {array[6]}
        </div>
        <div className="row-start-1 row-end-2 col-start-22 max-md:col-start-25 col-span-2 mt-auto">
          {array[7]}
        </div>
        <div className="row-start-1 row-end-2 col-start-24 max-md:col-start-28 col-span-2 mt-auto ">
          {array[8]}
        </div>
        <div className="row-start-1 row-end-2 col-start-26 col-span-2 max-md:col-start-31 mt-auto">
          {array[9] + "]"}
        </div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + startcol.current}
        >
          <span className="material-symbols-rounded text-4xl">north</span>
        </motion.div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + midcol.current}
        >
          <span className="material-symbols-rounded text-4xl">north</span>
        </motion.div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + endcol.current}
        >
          <span className="material-symbols-rounded text-4xl">north</span>
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto " + startcol.current
          }
        >
          start
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto " + midcol.current
          }
        >
          mid
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto " + endcol.current
          }
        >
          end
        </motion.div>
        <div className="divider row-start-5 row-end-6 p-0 m-0" />
        <div className="row-start-6 row-end-11 col-start-1 col-end-18">
          <CodeSteps current_step={currentStep.current} steps={steps} />
        </div>
        <div className="row-start-6 row-end-11 col-start-18 col-end-33">
          <AlgoDefinition />
        </div>
      </div>
    </>
  );
}

export default BinarySearch;
