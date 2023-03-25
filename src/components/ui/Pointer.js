import React from "react";
import { motion } from "framer-motion";

function Pointer(props) {
  return (
    <>
      <motion.div
        layout
        className={
          props.arrow_start + " row-span-2 h-0 col-span-2 " + props.col
        }
      >
        <span className="material-symbols-rounded h-0 text-4xl max-md:text-arrow  leading-[5rem]">
          north
        </span>
      </motion.div>
      <motion.div
        layout
        className={
          props.start +
          " row-span-2 h-0 col-span-2 leading-[3rem] " +
          props.col
        }
      >
        {props.name}
      </motion.div>
    </>
  );
}

export default Pointer;
