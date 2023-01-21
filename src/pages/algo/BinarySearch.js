import { useRef, useEffect, useState } from "react";
import { MainCard } from "../../components/ui/Cards";
import AlgoDefinition from "./AlgoDefinition";
import CodeSteps from "./CodeSteps";
import PlayButton from "./PlayButton";
import "./PlayButton.scss";
function BinarySearch() {
  const stepRef = useRef(0);
  const [array, setArray] = useState([
    ["15,", "32,", "40", "45,", "46,", "69,", "79,", "80,", "95,", "96"],
    [
      "start",
      "     ",
      "     ",
      "     ",
      " mid ",
      "     ",
      "     ",
      "     ",
      "     ",
      " end ",
    ],
  ]);
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
        <div className="m-auto flex py-[2rem] pb-[4rem] ">
          <code className="col-span-1 font-new text-3xl text-primary max-sm:text-sm">
            <table className="table-fixed justify-center">
              <tbody>
                <tr>
                  <td>
                    <PlayButton />
                  </td>
                  <td>[</td>
                  {array[0].map((item, index) => {
                    return (
                      <td className=" text-center" key={index}>
                        {item !== "40" ? (
                          item
                        ) : (
                          <div className="mask mask-star-2 border-solid bg-base-300/50">
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
                  {array[1].map((item, index) => {
                    return (
                      <td className="whitespace-pre text-center" key={index}>
                        {item === "     " ? (
                          "    "
                        ) : (
                          <span class="material-symbols-rounded text-4xl">
                            north
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  {array[1].map((item, index) => {
                    return (
                      <td
                        className="whitespace-pre pt-0 text-center"
                        key={index}
                      >
                        {item}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </code>
        </div>
        <div className="grid grid-cols-7">
          <div className="col-span-4">
            <CodeSteps current_step={stepRef.current} steps={steps} />
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
