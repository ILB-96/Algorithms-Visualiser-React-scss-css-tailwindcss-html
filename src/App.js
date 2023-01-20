import React, { useEffect, useState, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { RouteIntroDiv } from "./components/ui/CustomDivs";
const Contact = lazy(() => import("./pages/info/Contact"));
const About = lazy(() => import("./pages/info/About"));
const Home = lazy(() => import("./pages/main/Home"));
const BinarySearch = lazy(() => import("./pages/algo/BinarySearch"));
const QuickSort = lazy(() => import("./pages/algo/QuickSort"));
const HeapSort = lazy(() => import("./pages/algo/HeapSort"));
const MergeSort = lazy(() => import("./pages/algo/MergeSort"));
const InsertionSort = lazy(() => import("./pages/algo/InsertionSort"));
const SelectionSort = lazy(() => import("./pages/algo/SelectionSort"));
const BubbleSort = lazy(() => import("./pages/algo/BubbleSort"));
const LinearSearch = lazy(() => import("./pages/algo/LinearSearch"));
const BreadthFirstSearch = lazy(() =>
  import("./pages/algo/BreadthFirstSearch")
);
const DepthFirstSearch = lazy(() => import("./pages/algo/DepthFirstSearch"));

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");
  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);
  return (
    <>
      <NavBar>
        <RouteIntroDiv
          transitionStage={transitionStage}
          setTransitionStage={setTransitionStage}
          setDisplayLocation={setDisplayLocation}
          location={location}
        >
          <Routes location={displayLocation} key={location.pathname}>
            <Route exac path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/binarysearch" element={<BinarySearch />} />
            <Route path="/quicksort" element={<QuickSort />} />
            <Route path="/heapsort" element={<HeapSort />} />
            <Route path="/mergesort" element={<MergeSort />} />
            <Route path="/insertionsort" element={<InsertionSort />} />
            <Route path="/selectionsort" element={<SelectionSort />} />
            <Route path="/bubblesort" element={<BubbleSort />} />
            <Route path="/linearsearch" element={<LinearSearch />} />
            <Route
              path="/breadthfirstsearch"
              element={<BreadthFirstSearch />}
            />
            <Route path="/depthfirstsearch" element={<DepthFirstSearch />} />
          </Routes>
        </RouteIntroDiv>
        <Footer />
      </NavBar>
    </>
  );
}

export default App;
