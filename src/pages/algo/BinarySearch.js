import { useRef, useEffect, useState } from "react";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import "./PlayButton.scss";
function BinarySearch() {
  const [currentStep, setCurrentStep] = useState("row-start-1 row-end-2");
  const [pointers, setPointers] = useState([-1, -1, -1]);
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [visualArray, setVisualArray] = useState([
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
  console.log(pointers, counter);

  const IncreaseCounter = () => {
    setCounter((counter) => counter + 1);
  };
  useEffect(() => {
    if (isActive) {
      switch (counter + 1) {
        case 1:
          setCurrentStep("row-start-2 row-end-3");
          setPointers([0, -1, -1]);
          break;
        case 2:
          setCurrentStep("row-start-3 row-end-4");
          setPointers([0, -1, 9]);
          break;
        case 3:
        case 7:
        case 12:
          setCurrentStep("row-start-4 row-end-5");
          break;
        case 4:
        case 8:
        case 13:
          setCurrentStep("row-start-5 row-end-6");
          setPointers([
            pointers[0],
            Math.floor((pointers[0] + pointers[2]) / 2),
            pointers[2],
          ]);
          if (pointers[1] === 2) {
            setPointers([-1, 2, -1]);
          }
          break;
        case 5:
        case 9:
        case 14:
          setCurrentStep("row-start-6 row-end-7");
          break;
        case 15:
          if (pointers[1] === 2) {
            setPointers([-1, 2, -1]);
            setCurrentStep("row-start-7 row-end-8");
          }
          break;
        case 16:
          setCounter(0);
          setPointers([-1, -1, -1]);
          setCurrentStep("row-start-1 row-end-2");
          setIsActive((currentIsActive) => !currentIsActive);
          clearInterval(intervalRef.current);
        case 6:
          setCurrentStep("row-start-9 row-end-10");
          setPointers([0, 4, 3]);
          break;
        case 10:
          setCurrentStep("row-start-9 row-end-10");
        case 11:
          setCurrentStep("row-start-12 row-end-13");
          setPointers([2, 1, 3]);
          break;
        default:
          break;
      }
      setVisualArray(
        array.map((item, index) => {
          let newItem = "";
          switch (index) {
            case pointers[0]:
              newItem = "start";
              break;
            case pointers[2]:
              newItem = " end ";
              break;
            case pointers[1]:
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
        })
      );
      intervalRef.current = setInterval(IncreaseCounter, 2000);
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
    "\t\telif sorted_array[mid] < target:",
    "\t\t\tstart = mid + 1",
    "\t\telse:",
    "\t\t\tend = mid - 1",
    "\treturn -1",
  ];

  return (
    <>
      <div className="grid-rows-7 grid">
        <div className="m-auto flex py-[1rem] pb-[0.5rem] ">
          <code className="col-span-1 font-new text-3xl text-primary max-sm:text-sm">
            <table className="table-fixed justify-center">
              <tbody>
                <tr>
                  <td>
                    <PlayButton handler={HandlePlayClick} isActive={isActive} />
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
                <tr>
                  <td></td>
                  <td></td>
                  {visualArray.map((item, index) => {
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
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  {visualArray.map((item, index) => {
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
                </tr>
              </tbody>
            </table>
          </code>
        </div>
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
