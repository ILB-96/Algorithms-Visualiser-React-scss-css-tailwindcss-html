import "./CustomDivs.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InfoTabs(props) {
  const [selectedTab, setSelectedTab] = useState(props.tabs[0]);
  return (
    <div className="window ">
      <nav>
        <ul>
          {props.tabs.map((item, index) => (
            <li
              key={index}
              className={
                item === selectedTab
                  ? "selected justify-center "
                  : "justify-center"
              }
              onClick={() => setSelectedTab(item)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-[8%] py-4 justify-start items-start text-justify"
          >
            {selectedTab ? selectedTab.content : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
