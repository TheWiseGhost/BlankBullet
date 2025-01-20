import React from "react";

const Explaination = () => {
  return (
    <div className="flex flex-col my_grid">
      <h1 className="text-4xl text-center font-mon font-medium">
        We Made $20m Dropshipping without using Shopify???
      </h1>
      <div className="pt-12 flex flex-col md:flex-row items-center justify-center w-full space-y-6 md:space-y-0 space-x-0 md:space-x-8 px-6 md:px-16">
        <div className="w-full h-60 border flex items-center border-gray-400 rounded-md bg-white p-4 shadow-xl">
          <p className="font-dm">
            We made over $1m Dropshipping back in 2018. However, products died
            out quick and we were too slow to find winners before anyone else.
            There had to be a faster way to test products ...
          </p>
        </div>

        <div className="w-0 md:w-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
              data-name="3-Arrow Right"
            />
          </svg>
        </div>

        <div className="w-full h-60 border flex items-center border-gray-400 rounded-md bg-white p-4 shadow-xl">
          <p className="font-dm">
            Going against common practice, we tried to be the first to a winner.
            We made skeleton stores - stores that were just a product page and
            an email collection button. Soon, we were testing 20 new products a
            month using this method and found winners before anyone else.
          </p>
        </div>

        <div className="w-0 md:w-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
              data-name="3-Arrow Right"
            />
          </svg>
        </div>

        <div className="w-full h-60 border flex items-center border-gray-400 rounded-md bg-white p-4 shadow-xl">
          <p className="font-dm">
            5 years later and we've made over $20m over 6 different stores (all
            of which started as skeleton stores) Now, in 2025, with question
            marks over the future of dropshipping and its viability, we decided
            to launch DropFast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explaination;
