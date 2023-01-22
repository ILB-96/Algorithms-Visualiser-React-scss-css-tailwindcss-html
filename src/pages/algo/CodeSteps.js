import React from "react";
import { MainCard } from "../../components/ui/Cards";
import "./CodeSteps.css";
function CodeSteps(props) {
  let arrowLocation = props.current_step;
  return (
    <MainCard>
      <div className="max-h-[54vh] min-h-[51vh] min-w-[35vw] max-w-[50vw] overflow-scroll max-sm:text-sm">
        <article className="prose text-2xl">
          <h1 className="text-center text-2xl max-md:text-base">
            Algorithm Code
          </h1>
          <div className="grid-rows-12 grid">
            <div className={arrowLocation}>
              <span className="material-symbols-rounded text-red-700 max-sm:text-sm">
                east
              </span>
            </div>
            {props.steps.map((step, index) => {
              return (
                <div key={index} className="col-start-2 whitespace-pre">
                  {step}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </MainCard>
  );
}

export default CodeSteps;
