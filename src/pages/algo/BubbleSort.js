import React from "react";
const AlgoDef = [
  "Bubble Sort is a simple sorting algorithm.",
  "This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order.",
  "This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.",
];
const steps = [
  "def bubble_sort(arr):",
  "    n = len(arr)",
  "    for i in range(n):",
  "        for j in range(0, n-i-1):",
  "            if arr[j] > arr[j+1] :",
  "                arr[j], arr[j+1] = arr[j+1], arr[j]",
];
function BubbleSort() {
  return <div className="hero font-bold">Coming Soon</div>;
}

export default BubbleSort;
