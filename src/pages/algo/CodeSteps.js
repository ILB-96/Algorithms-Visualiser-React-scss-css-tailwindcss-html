import React from "react";
import { MainCard } from "../../components/ui/Cards";
import "./CodeSteps.css";
function CodeSteps(props) {
  return (
    <MainCard>
      <div className="max-h-[55vh] min-h-[51vh] max-w-[45vw] overflow-scroll text-2xl max-sm:max-h-[51vh] max-sm:text-xl">
        <article className="prose text-3xl max-md:text-base">
          <h1 className="text-center text-3xl max-md:text-xl">
            Algorithm Code
          </h1>
          <div className="grid-rows-12 grid grid-cols-12">
            <span
              class="material-symbols-rounded cols-start-2 m-auto w-fit justify-center p-0 text-center text-red-700
             max-sm:text-sm"
            >
              east
            </span>
            {props.steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className=" col-start-2 row-span-1 justify-start"
                >
                  <span className="whitespace-pre">{step}</span>
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
