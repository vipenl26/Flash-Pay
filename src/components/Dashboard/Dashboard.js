import React from "react";

//flex items-center justify-center
const Dashboard = () => {
  return (
    <div className=" bg-gray-400  h-72 sm:h-96 rounded-2xl my-5 pt-10 mx-10">
      <div className="items-center justify-center inline-flex mx-5  bg-yellow-400 rounded-full h-40 w-40 sm:h-60 sm:w-60">
        <div className="h-36 w-36 sm:h-56 sm:w-56 bg-indigo-400 rounded-full">
          <div className=" py-6 text-center text-1xl sm:text-2xl text-gray-600">
            Balance
          </div>
          <div className="text-center block  text-3xl sm:text-7xl text-white">
            420
          </div>
        </div>
      </div>
      <button className="mb-4 px-4 py-3 my-2 text-sm font-bold rounded no-underline hover:shadow-md bg-blue-600 text-white">
        Add Money
      </button>
      <button className="align-middle float-right mx-10  px-6 py-4 text-sm sm:text-lg font-bold rounded-full no-underline hover:shadow-lg bg-yellow-400 text-white">
        Make Payment
      </button>
    </div>
  );
};

export default Dashboard;
