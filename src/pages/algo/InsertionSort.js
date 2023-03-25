import { useRef, useEffect, useState, useCallback } from "react";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import InfoTabs from "../../components/ui/InfoTabs";
import { motion } from "framer-motion";
import "./PlayButton.scss";
import "../../components/ui/ArrayCard.js";
import Usecases from "./Usecases";
import ArrayCard from "../../components/ui/ArrayCard.js";
import Pointer from "../../components/ui/Pointer.js";
const algoDef = [
  "Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.",
  "The array is virtually split into a sorted and an unsorted part.",
  "Values from the unsorted part are picked and placed at the correct position in the sorted part.",
];
const steps = [
  "def insertion_sort(array):",
  "   curr = 1",
  "   main = 1",
  "   while main < len(array):",
  "       if curr !== 0 and array[curr-1] > array[curr]:",
  "           temp = array[curr-1]",
  "           array[curr-1] = array[curr]",
  "           array[curr] = temp",
  "           curr -= 1",
  "       else:",
  "           main += 1",
  "           curr = main",
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
const totalSteps = [
  "row-start-1 row-end-2",
  "row-start-2 row-end-3",
  "row-start-3 row-end-4",
  "row-start-4 row-end-5",
  "row-start-5 row-end-6",
  "row-start-6 row-end-7",
  "row-start-7 row-end-8",
  "row-start-8 row-end-9",
  "row-start-9 row-end-10",
  "row-start-10 row-end-11",
  "row-start-11 row-end-12",
  "row-start-12 row-end-13",
];
function InsertionSort() {
  let temp = useRef(0);
  let currentStep = useRef("row-start-1 row-end-2");
  let pointers = useRef([-1, -1]);
  let midcol = useRef("invisible");
  let endcol = useRef("invisible");
  let tabs = useRef([
    {
      icon: "code_blocks",
      label: "Algorithm",
      content: <CodeSteps current_step={currentStep.current} steps={steps} />,
    },
    {
      icon: "description",
      label: "Description",
      content: <AlgoDefinition info={algoDef} />,
    },
    {
      icon: "bolt",
      label: "Usecases",
      content: <Usecases cases={usecases} />,
    },
  ]);
  let prevItem = useRef(0);
  let currItem = useRef(0);
  let main = useRef([
    {
      pos: 0,
      val: 45,
      col: "col-start-8 col-end-10",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 1,
      val: 69,
      col: "col-start-10 col-end-12",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 2,
      val: 95,
      col: "col-start-12 col-end-14",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 3,
      val: 15,
      col: "col-start-14 col-end-16",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 4,
      val: 46,
      col: "col-start-16 col-end-18",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 5,
      val: 32,
      col: "col-start-18 col-end-20",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 6,
      val: 79,
      col: "col-start-20 col-end-22",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 7,
      val: 80,
      col: "col-start-22 col-end-24",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 8,
      val: 55,
      col: "col-start-24 col-end-26",
      row: "row-start-2 row-end-3",
    },
    {
      pos: 9,
      val: 60,
      col: "col-start-26 col-end-28",
      row: "row-start-2 row-end-3",
    },
  ]);

  let intervalRef = useRef();
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const IncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    if (isActive) {
      switch (currentStep.current) {
        case totalSteps[0] /* curr = 1*/:
          currentStep.current = totalSteps[1];
          pointers.current[0] = 1;
          main.current.map((item, index) => {
            if (item.pos === pointers.current[0]) {
              return (midcol.current = main.current[index].col);
            }
            return 0;
          });
          break;
        case totalSteps[1] /* main = 1 */:
          currentStep.current = totalSteps[2];
          pointers.current[1] = 1;
          main.current.map((item, index) => {
            if (item.pos === pointers.current[1]) {
              return (endcol.current = main.current[index].col);
            }
            return 0;
          });
          break;
        case totalSteps[2] /* while main < len(array): */:
          currentStep.current = totalSteps[3];
          break;
        case totalSteps[3] /* if array[curr -1] > array[curr]: */:
          if (pointers.current[0] >= main.current.length) {
            break;
          }
          currentStep.current = totalSteps[4];
          if (pointers.current[0] >= 1) {
            main.current.map((item, index) => {
              if (item.pos === pointers.current[0]) {
                return (currItem.current = index);
              } else if (item.pos === pointers.current[0] - 1) {
                return (prevItem.current = index);
              }
              return 0;
            });
          }
          break;
        case totalSteps[4]:
          if (
            pointers.current[0] !== 0 &&
            currItem.current !== 0 &&
            main.current[prevItem.current].val >
              main.current[currItem.current].val
          ) {
            currentStep.current = totalSteps[5];
            main.current[prevItem.current].row = "row-start-1 row-end-2";
            temp.current = [
              main.current[currItem.current].col,
              main.current[currItem.current].pos,
            ];
          } else {
            currentStep.current = totalSteps[9];
          }
          break;
        case totalSteps[5]:
          currentStep.current = totalSteps[6];
          main.current[currItem.current].col =
            main.current[prevItem.current].col;
          main.current[currItem.current].pos =
            main.current[prevItem.current].pos;
          midcol.current = main.current[prevItem.current].col;
          break;
        case totalSteps[6]:
          currentStep.current = totalSteps[7];
          main.current[prevItem.current].col = temp.current[0];
          main.current[prevItem.current].pos = temp.current[1];
          main.current[prevItem.current].row = "row-start-2 row-end-3";
          break;
        case totalSteps[7]:
          currentStep.current = totalSteps[8];
          pointers.current[0] = pointers.current[0] - 1;
          break;
        case totalSteps[8]:
          currentStep.current = totalSteps[3];
          break;
        case totalSteps[9]:
          currentStep.current = totalSteps[10];
          pointers.current[1] = pointers.current[1] + 1;
          main.current.map((item, index) => {
            if (item.pos === pointers.current[1]) {
              return (endcol.current = main.current[index].col);
            }
            return 0;
          });
          break;
        case totalSteps[10]:
          currentStep.current = totalSteps[11];
          pointers.current[0] = pointers.current[1];
          midcol.current = endcol.current;
          break;
        case totalSteps[11]:
          currentStep.current = totalSteps[3];
          break;
        default:
          currentStep.current = "row-start-1 row-end-2";
          break;
      }
      tabs.current[0].content = (
        <CodeSteps current_step={currentStep.current} steps={steps} />
      );
      intervalRef.current = setInterval(IncreaseCounter, 500);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, counter]);
  const HandlePlayClick = useCallback(() => {
    if (isActive) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(IncreaseCounter, 500);
    }
    setIsActive((currentIsActive) => !currentIsActive);
  }, [isActive]);

  return (
    <>
      <div className="grid grid-rows-16 grid-cols-32 text-center text-3xl max-md:text-base ">
          <PlayButton handler={HandlePlayClick} isActive={isActive} />
        <ArrayCard array={main.current}/>
        <Pointer name="curr" col={midcol.current} start="row-start-3" arrow_start="row-start-2" />
        <motion.div
          layout
          className={"row-start-1 row-end-2 h-0 col-span-2 " + endcol.current}
        >
          <span className="material-symbols-rounded h-0 text-4xl max-md:text-arrow ">
            north
          </span>
        </motion.div>
        <motion.div
          layout
          className={
            "row-start-0 row-end-1 col-span-2 leading-[1.5rem] " +
            endcol.current
          }
        >
          main
        </motion.div>
        {/* <div className="divider row-start-4 row-end-5 p-0 m-0 max-md:hidden" /> */}   
          <InfoTabs tabs={tabs.current} />
      </div>
    </>
  );
}

export default InsertionSort;
