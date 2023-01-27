import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./NavButton.css";
import { NavButton } from "./NavButton";

const NavBar = (props) => {
  return (
    <div className=" h-fit navbar sticky overflow-x-scroll scrollbar-hide">
      <NavLink className="navbtn main navbtn-3 hover-border-2" to="/">
        <span>AlgoViz</span>
      </NavLink>
      <div className=" text-center sm:ml-6 block">
        <ul className="menu-horizontal">
          <NavButton itemTitle="Binary Search" itemEndpoint="binarysearch" />
          <NavButton itemTitle="Quick Sort" itemEndpoint="quicksort" />
          <NavButton itemTitle="Heap Sort" itemEndpoint="heapsort" />
          <NavButton itemTitle="Merge Sort" itemEndpoint="mergesort" />
          <NavButton itemTitle="Selection Sort" itemEndpoint="selectionsort" />
          <NavButton itemTitle="Insertion Sort" itemEndpoint="insertionsort" />
          <NavButton itemTitle="Bubble Sort" itemEndpoint="bubblesort" />
          <NavButton itemTitle="Linear Search" itemEndpoint="linearsearch" />
          <NavButton
            itemTitle="Breadth First Search"
            itemEndpoint="breadthfirstsearch"
          />
          <NavButton
            itemTitle="Depth First Search"
            itemEndpoint="depthfirstsearch"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
