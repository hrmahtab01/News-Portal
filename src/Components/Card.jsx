import React from "react";

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className="mt-[50px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          if (!item.urlToImage) {
            return null;
          } else {
            return (
              <>
                <div  key={item.url} className=" border-[2px] border-black shadow-lg shadow-black px-4 pb-3 pt-1 rounded-md ">
                  <img
                    className=" h-[250px] object-cover"
                    src={item.urlToImage}
                    alt="urlToImage"
                  />
                  <p
                    onClick={() => window.open(item.url)}
                    className="text-2xl font-semibold text-black font-sans mt-3 cursor-pointer hover:text-red-500 duration-150"
                  >
                    {item.title}
                  </p>
                  <p className="text-base font-medium font-sans text-black mt-3">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-xl text-black font-semibold font-sans">
                      Publised:
                    </p>
                    <p className="text-base font-medium text-black font-sans mt-1">
                      {item.publishedAt}
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-xl text-black font-semibold font-sans">
                      source:
                    </p>
                    <p className="text-base font-medium text-black font-sans mt-1">
                      {item.source.name}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(item.url)}
                    className="text-lg font-semibold text-red-500 font-sans border-b border-red-600 mt-4"
                  >
                    Readmore
                  </button>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
