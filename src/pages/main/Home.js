import React from "react";

const Home = (props) => {
  return (
    <>
      <main>
        <div className="hero min-h-[80vh]">
          <div className="hero-content text-center">
            <div className="max-w-screen">
              <h1 className="font-bold text-primary max-sm:text-3xl md:text-5xl">
                AlgoViz - Algorithm Visualizer
              </h1>
              <p className=" py-5 text-info max-sm:text-2xl md:text-4xl">
                Here you can find information about algorithms and data
                structures.
                <br></br>
                Each algorithm has a description, code implemintation in Python,
                use case recommandations, and a step by step visualizer of how
                it works.
                <br></br>
                Don't know where to start?
              </p>
              <button className="btn-primary btn">Try Random</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
