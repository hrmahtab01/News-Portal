import React from "react";

const Newsapp = () => {
  return (
    <div>
      <nav>
        <div className="max-w-container mx-auto">
          <div className="bg-slate-800 w-full py-4 px-1 ">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white text-3xl font-semibold font-serif">
                  Mango <span className="text-red-500">News</span>
                </h2>
              </div>
              <div className="flex gap-2">
                <h2 className="text-white text-2xl font-semibold font-sans">
                  All News{" "}
                </h2>
                <h2 className="text-white text-2xl font-semibold font-sans">
                  Top Headline{" "}
                </h2>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-750px h-[32px]">
                  <input
                    className="w-full h-full bg-white text-black border-[2px]  rounded-md outline-none text-lg font-medium font-mono placeholder:text-black shadow-md shadow-teal-700 px-2 "
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <button className="text-lg text-white font-semibold font-mono bg-teal-800 py-1 px-4 rounded-md ">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center text-4xl font-semibold font-sans text-black">
              Stay Update with Trendy News
            </h1>
            <div className="flex gap-4 justify-center mt-4">
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Sports
              </button>
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Politics
              </button>
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Health
              </button>
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Entertainment
              </button>
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Technology
              </button>
              <button className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md ">
                Science
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Newsapp;
