import React from "react";
import { MainCard } from "../../components/ui/Cards";
import "./CodeSteps.css";
function AlgoDefinition() {
  return (
    <MainCard>
      <div className="max-h-[60vh] min-h-[55vh]  overflow-scroll">
        <div className="clearfix">
          <h1 className="text-center">Algorithm Description</h1>
          <br></br>
          <p>
            A binary search is a search algorithm that finds the position of a
            target value within a sorted array.<br></br>
            <br></br> Binary search compares the target value to the middle
            element of the array.<br></br>
            <br></br> If they are not equal, the half in which the target cannot
            lie is eliminated and the search continues on the remaining half,
            again taking the middle element to compare to the target value, and
            repeating this until the target value is found. If the search
          </p>
        </div>
      </div>
    </MainCard>
  );
}

export default AlgoDefinition;
