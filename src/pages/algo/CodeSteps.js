import React from "react";
import { MainCard } from "../../components/ui/Cards";
import { motion } from "framer-motion";
function CodeSteps(props) {
  let arrowLocation = props.current_step;
  return (
    <>
      <code className="grid-rows-12  grid grid-col-12 text-xl overflow-scroll max-sm:text-sm">
        <motion.div
          layout
          className={
            arrowLocation +
            "  justify-center items-center col-start-1 col-end-2"
          }
        >
          <span className="material-symbols-rounded text-red-700 max-sm:text-sm">
            east
          </span>
        </motion.div>
        {props.steps.map((step, index) => {
          return (
            <pre
              key={index}
              className="text-start row-span-1 col-start-2 col-end-13"
            >
              {step}
            </pre>
          );
        })}
      </code>
    </>
  );
}

export default CodeSteps;
