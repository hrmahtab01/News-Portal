import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("Bangladesh");
  const ApiKey = "b76f3340253349bba3afad35af50886e";
  const [newsdata, setNewsData] = useState(null);

  const handleSearchValue = (e) => {
    setSearch(e.target.value);
  };

  const fetchNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${ApiKey}`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  const handleCategorySearch = (e) => {
    const category = e.target.value;
    setSearch(category);
  };

  useEffect(() => {
    fetchNews();
  }, [search]);

  return (
    <div className="pb-4">
      <nav>
        <div className="max-w-container mx-auto">
          <div className="bg-slate-800 w-full py-4 px-1">
            <div className="flex justify-between items-center flex-wrap">
              <div>
                <h2 className="text-white text-3xl font-semibold font-serif">
                 MS<span className="text-red-500">News</span>
                </h2>
              </div>
              <div className="flex gap-2 hidden md:flex">
                <h2 className="text-white text-lg font-semibold font-sans">
                  All News
                </h2>
                <h2 className="text-white text-lg font-semibold font-sans">
                  Top Headline
                </h2>
              </div>
              <div className="flex gap-1 items-center w-full md:w-auto mt-3 md:mt-0">
                <div className="w-full md:w-64 h-[32px]">
                  <input
                    onChange={handleSearchValue}
                    value={search}
                    className="w-full h-full bg-white text-black border-[2px] rounded-md outline-none text-lg font-medium font-mono placeholder:text-black shadow-md shadow-teal-700 px-2"
                    type="text"
                    placeholder="Search News"
                  />
                </div>
                <button
                  onClick={fetchNews}
                  className="text-lg text-white font-semibold font-mono bg-teal-800 py-1 px-4 rounded-md  md:mt-0"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center text-4xl font-semibold font-sans text-black">
              Stay Updated with Trendy News
            </h1>
            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              {/* Category buttons */}
              <button
                onClick={handleCategorySearch}
                value="Sports"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Sports
              </button>
              <button
                onClick={handleCategorySearch}
                value="Politics"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Politics
              </button>
              <button
                onClick={handleCategorySearch}
                value="Health"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Health
              </button>
              <button
                onClick={handleCategorySearch}
                value="Entertainment"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Entertainment
              </button>
              <button
                onClick={handleCategorySearch}
                value="Technology"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Technology
              </button>
              <button
                onClick={handleCategorySearch}
                value="Science"
                className="text-lg font-medium text-white font-serif py-2 px-4 bg-teal-900 rounded-md mb-2"
              >
                Science
              </button>
            </div>
          </div>
          {/* Render Card Component */}
          {newsdata ? <Card data={newsdata} /> : null}
        </div>
      </nav>
    </div>
  );
};

export default Newsapp;
