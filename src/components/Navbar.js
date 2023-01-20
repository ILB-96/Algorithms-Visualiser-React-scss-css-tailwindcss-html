import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./NavButton.css";
import { NavButton } from "./NavButton";

const NavBar = (props) => {
  return (
    <div className="scroll-x drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar sticky h-fit w-full overflow-x-scroll scrollbar-hide">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className=" btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className=" flex-1 text-center">
            <NavLink className="navbtn main navbtn-3 hover-border-2" to="/">
              <span>AlgoViz</span>
            </NavLink>
          </div>
          <div className="hidden text-center sm:ml-6 lg:block">
            <ul className=" menu-horizontal">
              <NavButton
                itemTitle="Binary Search"
                itemEndpoint="binarysearch"
              />
              <NavButton itemTitle="Quick Sort" itemEndpoint="quicksort" />
              <NavButton itemTitle="Heap Sort" itemEndpoint="heapsort" />
              <NavButton itemTitle="Merge Sort" itemEndpoint="mergesort" />
              <NavButton
                itemTitle="Selection Sort"
                itemEndpoint="selectionsort"
              />
              <NavButton
                itemTitle="Insertion Sort"
                itemEndpoint="insertionsort"
              />
              <NavButton itemTitle="Bubble Sort" itemEndpoint="bubblesort" />
              <NavButton
                itemTitle="Linear Search"
                itemEndpoint="linearsearch"
              />
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
        {props.children}
      </div>
      <div className="drawer-side scrollbar-hide">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu max-w-xs bg-base-100 p-4">
          <li>
            <a>Quick Sort</a>
          </li>
          <li>
            <a>Heap Sort</a>
          </li>
          <li>
            <a>Merge Sort</a>
          </li>
          <li>
            <a>Bucket Sort</a>
          </li>
          <li>
            <a>Counting Sort</a>
          </li>
          <li>
            <a>Breadth-First Search </a>
          </li>
          <li>
            <a>Depth-First Search</a>
          </li>
          <li>
            <a>Binary Search</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
