import React from "react";

export default function Usecases(props) {
  return (
    <>
      <code className="text-xl max-sm:text-base">
        {props.cases.map((item, index) => (
          <div className="" key={index}>
            {`${index + 1}. ${item}`}
            <br></br>
          </div>
        ))}
      </code>
    </>
  );
}
