import React, { useState } from "react";
import { motion } from "framer-motion";
function BreadthFirstSearch() {
  const cart = [
    ["Corn", "Potato", "Radish"],
    ["Tomato", "Graphes", "Mango"],
  ];
  const [visualArray, setVisualArray] = useState([
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
  ]);
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
  return (
    <div className="flex">
      {array.map((item, index) => {
        return (
          <ol className="" key={index}>
            <li className="whitespace-pre text-center leading-[0.5rem]">
              {" "}
              {item}{" "}
            </li>
            <motion.div>
              <li className="whitespace-pre text-center pt-3 px-2 leading-[0.5rem]">
                {visualArray[index] === "     " ? (
                  "     "
                ) : (
                  <span className="material-symbols-rounded text-4xl leading-5">
                    north
                  </span>
                )}
              </li>
              <li className="whitespace-pre text-center leading-[0.5rem]">
                {visualArray[index]}
              </li>
            </motion.div>
          </ol>
        );
      })}
    </div>
  );
}

export default BreadthFirstSearch;
