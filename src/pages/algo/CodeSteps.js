import React from "react";
import "./CodeSteps.css";
function CodeSteps(props) {
  return (
    <div className="hidden ">
      <div className="wrapper ">
        <div className="arrow-steps clearfix  ">
          {props.steps.map((step, index) => {
            return (
              <div
                key={index}
                className={
                  props.current_step >= index ? "current step" : "step"
                }
              >
                <code className="whitespace-pre  text-xs">{step}</code>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CodeSteps;
