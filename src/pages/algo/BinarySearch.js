import { useRef, useEffect, useState } from "react";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import { LayoutGroup, motion } from "framer-motion";
import "./PlayButton.scss";
const variants = {
  open: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  closed: {
    opacity: 0,
  },
};
function BinarySearch() {
  const [currentStep, setCurrentStep] = useState("row-start-1 row-end-2");
  let pointers = useRef([-1, -1, -1]);
  let prevPointers = useRef([-1, -1, -1]);
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let visualArray = useRef([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
  ]);
  let intervalRef = useRef();
  const array = [
    "15,",
    "32,",
    "40",
    "45,",
    "46,",
    "69,",
    "79,",
    "80,",
    "95,",
    "96",
  ];
  console.log(pointers.current, counter, currentStep);

  const IncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    if (isActive) {
      switch (counter) {
        case 1:
          setCurrentStep("row-start-2 row-end-3");
          pointers.current = [0, -1, -1];
          break;
        case 2:
          setCurrentStep("row-start-3 row-end-4");
          pointers.current = [0, -1, 9];
          break;
        case 3:
        case 8:
          setCurrentStep("row-start-4 row-end-5");
          break;
        case 4:
        case 9:
        case 14:
          setCurrentStep("row-start-5 row-end-6");
          pointers.current[1] = Math.floor(
            (pointers.current[0] + pointers.current[2]) / 2
          );

          if (pointers.current[1] === 2) {
            pointers.current = [-1, 2, -1];
          }
          break;
        case 5:
        case 10:
        case 15:
          setCurrentStep("row-start-6 row-end-7");
          break;
        case 16:
          if (pointers.current[1] === 2) {
            pointers.current = [-1, 2, -1];
            setCurrentStep("row-start-7 row-end-8");
          }
          break;
        case 17:
          setCounter(0);
          setIsActive((currentIsActive) => !currentIsActive);
          clearInterval(intervalRef.current);
          break;
        case 6:
        case 11:
          setCurrentStep("row-start-8 row-end-9");
          break;
        case 7:
          setCurrentStep("row-start-9 row-end-10");
          pointers.current = [0, 4, 3];
          break;
        case 12:
          setCurrentStep("row-start-10 row-end-11");
          break;
        case 13:
          setCurrentStep("row-start-11 row-end-12");
          pointers.current = [2, 1, 3];
          break;
        default:
          pointers.current = [-1, -1, -1];
          setCurrentStep("row-start-1 row-end-2");
          break;
      }
      visualArray.current = array.map((item, index) => {
        let newItem = "";
        switch (index) {
          case pointers.current[0]:
            newItem = "start";
            break;
          case pointers.current[2]:
            newItem = " end ";
            break;
          case pointers.current[1]:
            if (counter >= 4) {
              newItem = " mid ";
            } else {
              newItem = "     ";
            }
            break;
          default:
            newItem = "     ";
        }
        return newItem;
      });
      intervalRef.current = setInterval(IncreaseCounter, 4000);
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
    "\tstart = 0",
    "\tend = len(sorted_array) - 1",
    "\twhile start <= end:",
    "\t\tmid = (start+end) // 2",
    "\t\tif sorted_array[mid] == target:",
    "\t\t\treturn mid",
    "\t\telif sorted_array[mid] > target:",
    "\t\t\tend = mid - 1",
    "\t\telse:",
    "\t\t\tstart = mid + 1",
    "\treturn -1",
  ];

  return (
    <>
      <div className="grid-rows-7 grid">
        <LayoutGroup>
          <div className="m-auto flex py-[1rem] pb-[0.5rem] ">
            <code className="col-span-1 font-new text-3xl text-primary max-sm:text-sm">
              <table className="table-fixed justify-center">
                <tbody>
                  <tr>
                    <td>
                      <PlayButton
                        handler={HandlePlayClick}
                        isActive={isActive}
                      />
                    </td>
                    <td>[</td>
                    {array.map((item, index) => {
                      return (
                        <td className=" text-center" key={index}>
                          {item !== "40" ? (
                            item
                          ) : (
                            <div className="mask mask-star-2 border-solid bg-base-300/50 ">
                              {item}
                            </div>
                          )}
                        </td>
                      );
                    })}
                    <td>]</td>
                  </tr>

                  <motion.tr
                    layout
                    key={pointers.current * 2}
                    variants={variants}
                    initial="closed"
                    animate={"open"}
                  >
                    <td></td>
                    <td></td>
                    {visualArray.current.map((item, index) => {
                      return (
                        <td
                          className="whitespace-pre text-center leading-[0.5rem]"
                          key={index}
                        >
                          {item === "     " ? (
                            "    "
                          ) : (
                            <span className="material-symbols-rounded text-4xl leading-5">
                              north
                            </span>
                          )}
                        </td>
                      );
                    })}
                    <td></td>
                  </motion.tr>

                  <motion.tr
                    layout
                    key={pointers.current}
                    variants={variants}
                    initial="closed"
                    animate="open"
                  >
                    <td></td>
                    <td></td>
                    {visualArray.current.map((item, index) => {
                      return (
                        <td
                          className="whitespace-pre text-center leading-[1.5rem]"
                          key={index}
                        >
                          {item}
                        </td>
                      );
                    })}
                    <td></td>
                  </motion.tr>
                </tbody>
              </table>
            </code>
          </div>
        </LayoutGroup>
        <div className="divider" />
        <div className="grid grid-cols-7">
          <div className="col-span-4">
            <CodeSteps current_step={currentStep} steps={steps} />
          </div>
          <div className="cols-start-5 col-span-3">
            <AlgoDefinition />
          </div>
        </div>
      </div>
    </>
  );
}

export default BinarySearch;
