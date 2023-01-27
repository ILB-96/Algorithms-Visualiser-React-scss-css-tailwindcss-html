import React from "react";
import { MainCard } from "../../components/ui/Cards";
function AlgoDefinition() {
  return (
    <MainCard>
      <h1 className=" text-2xl max-sm:text-base">Algorithm Description</h1>
      <code className="text-xl max-sm:text-base">
        Binary search is a search algorithm that finds the position of a target
        value within a sorted array.
        <br></br> Binary search compares the target value to the middle element
        of the array.
        <br></br> If they are not equal, the half in which the target cannot lie
        is eliminated and the search continues on the remaining half, again
        taking the middle element to compare to the target value, and repeating
        this until the target value is found.
      </code>
    </MainCard>
  );
}

export default AlgoDefinition;
