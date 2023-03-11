import { useRef, useEffect, useState } from "react";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import InfoTabs from "../../components/ui/InfoTabs";
import { motion } from "framer-motion";
import "./PlayButton.scss";
import Usecases from "./Usecases";
import { useCallback } from "react";

const AlgoDef = [
  "Binary search is a search algorithm that finds the position of a target value within a sorted array.",
  "Binary search compares the target value to the middle element of the array.",
  "If they are not equal, the half in which the target cannot lie \
is eliminated and the search continues on the remaining half, again\
taking the middle element to compare to the target value, and repeating\
this until the target value is found.",
];
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
const usecases = [
  "Searching for a specific number in a list of numbers.",
  "Finding a word in a dictionary,",
  "Looking up a date in a timeline",
  "Finding a specific record in a database.",
  "Searching for a song in a playlist.",
  "Checking if a name is in a phonebook.",
  "It's used because it's a quick way to search a large list of items.",
];

const array = [15, 32, 40, 45, 46, 69, 79, 80, 95, 96];
function BinarySearch() {
  let currentStep = useRef("row-start-1 row-end-2");
  let pointers = useRef([-1, -1, -1]);
  let startcol = useRef("invisible ");
  let endcol = useRef("invisible");
  let midcol = useRef("invisible");
  let intervalRef = useRef();
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const IncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    if (isActive) {
      switch (counter) {
        case 1:
          currentStep.current = "row-start-2 row-end-3";
          pointers.current = [0, -1, -1];
          startcol.current = "col-start-8 max-md:col-start-3";
          break;
        case 2:
          currentStep.current = "row-start-3 row-end-4";
          pointers.current = [0, -1, 9];
          endcol.current = "col-start-26 max-md:col-start-30";
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
              midcol.current = " col-start-16 max-md:col-start-15";
              break;
            case 1:
              midcol.current = "col-start-10 max-md:col-start-6";
              break;
            case 2:
              startcol.current = "invisible";
              midcol.current = "col-start-12 max-md:col-start-9";
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
          endcol.current = "col-start-14 max-md:col-start-12";
          break;
        case 12:
          currentStep.current = "row-start-10 row-end-11";
          break;
        case 13:
          currentStep.current = "row-start-11 row-end-12";
          pointers.current = [2, 1, 3];
          startcol.current = "col-start-12 max-md:col-start-9";
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

  const HandlePlayClick = useCallback(() => {
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(IncreaseCounter, 2000);
    }
    setIsActive((currentIsActive) => !currentIsActive);
  }, [isActive]);
  let tabs = [
    {
      icon: "code_blocks",
      label: "Algorithm",
      content: <CodeSteps current_step={currentStep.current} steps={steps} />,
    },
    {
      icon: "description",
      label: "Description",
      content: <AlgoDefinition info={AlgoDef} />,
    },
    {
      icon: "bolt",
      label: "Usecases",
      content: <Usecases cases={usecases} />,
    },
  ];

  return (
    <>
      <div className="grid grid-rows-10 grid-cols-32 text-center text-3xl max-md:text-base ">
        <div className="row-start-1 row-end-3 col-start-1 max-md:row-start-4 h-3/4 max-md:row-end-7 max-md:col-start-14 col-span-1">
          <PlayButton handler={HandlePlayClick} isActive={isActive} />
        </div>
        <div className="row-start-1 row-end-2 col-start-8 max-md:col-start-3 col-span-2 mt-auto">
          {"[" + array[0]}
        </div>
        <div className="row-start-1 row-end-2 col-start-9 max-md:col-start-5 col-span-2 max-md:col-span-1 ">
          <span className="material-symbols-outlined text-divider relative max-md:text-xl top-3 max-md:top-1 text-orange-500/30">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-10 max-md:col-start-6 col-span-2 mt-auto">
          {array[1]}
        </div>
        <div className="row-start-1 bg-red-700/20 rounded-md row-end-2 col-start-12 max-md:col-start-9 col-span-2 mt-auto">
          {array[2]}
        </div>
        <div className="row-start-1 row-end-2 col-start-14 col-span-2 max-md:col-start-12 mt-auto ">
          {array[3]}
        </div>
        <div className="row-start-1 row-end-2 col-start-15 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-14">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-16 col-span-2 max-md:col-start-15 mt-auto ">
          {array[4]}
        </div>
        <div className="row-start-1 row-end-2 col-start-17 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-17 ">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-18 max-md:col-start-18 col-span-2 mt-auto ">
          {array[5]}
        </div>
        <div className="row-start-1 row-end-2 col-start-19 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-20">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-20 max-md:col-start-21 col-span-2 mt-auto">
          {array[6]}
        </div>
        <div className="row-start-1 row-end-2 col-start-21 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-23">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-22 max-md:col-start-24 col-span-2 mt-auto">
          {array[7]}
        </div>
        <div className="row-start-1 row-end-2 col-start-23 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-26">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-24 max-md:col-start-27 col-span-2 mt-auto ">
          {array[8]}
        </div>
        <div className="row-start-1 row-end-2 col-start-25 col-span-2 mt-auto max-md:col-span-1 max-md:col-start-29">
          <span className="material-symbols-outlined text-divider relative top-3 text-orange-500/30 max-md:text-xl max-md:top-1">
            more_vert
          </span>
        </div>
        <div className="row-start-1 row-end-2 col-start-26 col-span-2 max-md:col-start-30 mt-auto">
          {array[9] + "]"}
        </div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + startcol.current}
        >
          <span className="material-symbols-rounded text-4xl max-md:text-arrow leading-[2rem] ">
            north
          </span>
        </motion.div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + midcol.current}
        >
          <span className="material-symbols-rounded text-4xl max-md:text-arrow leading-[2rem] ">
            north
          </span>
        </motion.div>
        <motion.div
          layout
          className={"row-start-2 row-end-3 col-span-2 " + endcol.current}
        >
          <span className="material-symbols-rounded text-4xl max-md:text-arrow leading-[2rem] ">
            north
          </span>
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto leading-[0] pb-5 " +
            startcol.current
          }
        >
          start
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto leading-[0] pb-5 " +
            midcol.current
          }
        >
          mid
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-3 row-end-4 col-span-2 mb-auto leading-[0] pb-5 " +
            endcol.current
          }
        >
          end
        </motion.div>
        <div className="divider row-start-5 row-end-6 p-0 m-0 max-md:hidden" />
        <div className="row-start-6 row-end-12 col-start-1 col-end-33">
          <InfoTabs tabs={tabs} />
        </div>
      </div>
    </>
  );
}

export default BinarySearch;
