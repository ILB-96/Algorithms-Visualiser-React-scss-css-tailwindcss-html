import React from 'react'
import { motion } from "framer-motion";

function ArrayCard(props) {
  return (
    <>
    <div className="leading-[1rem] h-0 row-start-2 row-end-3 col-start-7 max-md:col-start-3 col-span-2 ">
          {"["}
        </div>
        {props.array.map((item, index) => {
          return (
            <motion.div
              layout
              className={"h-0 leading-[1.2rem] " + item.col + " " + item.row}
            >
              {item.val}
            </motion.div>
          );
        })}
        <motion.div className="leading-[1rem] h-0 row-start-2 row-end-3 col-start-27 col-span-2 max-md:col-start-30 ">
          {"]"}
        </motion.div>
        </>
  )
}

export default ArrayCard