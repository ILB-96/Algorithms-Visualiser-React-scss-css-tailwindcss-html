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
                Unlock the Power of Algorithms and Data Structures!<br></br>
                As a Programmer student, mastering these concepts can be the key
                to success.<br></br>
                Get ahead of the curve with our comprehensive platform -
                complete with algorithm descriptions, Python code, use case
                recommendations, and interactive visualizations. Start your
                journey now!<br></br>
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
