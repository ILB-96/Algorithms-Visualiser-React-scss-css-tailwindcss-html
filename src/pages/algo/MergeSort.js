import React from "react";
import { motion } from "framer-motion";
import "./PlayButton.scss";
import Usecases from "./Usecases";
import { useCallback } from "react";

const AlgoDef = [
  "Merge Sort is a Divide and Conquer algorithm.",
  "It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.",
  "The merge() function is used for merging two halves.",
  "The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.",
];
const steps = [
  "def merge_sort(A):",
  "    if len(A) > 1:",
  "        mid = len(A) // 2",
  "        L = A[:mid]",
  "        R = A[mid:]",
  "        merge_sort(L)",
  "        merge_sort(R)",
  "        i = j = k = 0",
  "        while i < len(L) and j < len(R):",
  "            if L[i] < R[j]:",
  "                A[k] = L[i]",
  "                i += 1",
  "            else:",
  "                A[k] = R[j]",
  "                j += 1",
];
function MergeSort() {
  return <div className="hero font-bold">Coming Soon</div>;
}

export default MergeSort;
