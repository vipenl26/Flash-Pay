import React from "react";

const PaymentPage = () => {
  return (
    <div className="">
      <div className="container flex justify-center py-11">
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
          </div>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search anything..."
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-yellow-400 hover:bg-yellow-500">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="  text-white text-sm" >
      
      <div className=" flex-grow overflow-hidden h-full flex flex-col" >
        
        <div className=" flex-grow flex overflow-x-hidden" >
          
          <div className=" flex-grow   overflow-y-auto" >
            
            <div className=" sm:p-7 p-4" >
              <div className=" flex w-full items-center mb-7" >
                <button className=" inline-flex mr-3 items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-400 border-gray-800 border leading-none py-0" >
                  <svg
                    viewBox=" 0 0 24 24" 
                    className=" w-4 mr-2 text-gray-600" 
                    stroke=" currentColor" 
                    strokeWidth=" 2" 
                    fill=" none" 
                    strokeLinecap=" round" 
                    strokeLinejoin=" round" 
                  >
                    <rect
                      x=" 3" 
                      y=" 4" 
                      width=" 18" 
                      height=" 18" 
                      rx=" 2" 
                      ry=" 2" 
                    ></rect>
                    <line x1=" 16"  y1=" 2"  x2=" 16"  y2=" 6" ></line>
                    <line x1=" 8"  y1=" 2"  x2=" 8"  y2=" 6" ></line>
                    <line x1=" 3"  y1=" 10"  x2=" 21"  y2=" 10" ></line>
                  </svg>
                  Last 30 days
                  <svg
                    viewBox=" 0 0 24 24" 
                    className=" w-4 ml-1.5 text-gray-600" 
                    stroke=" currentColor" 
                    strokeWidth=" 2" 
                    fill=" none" 
                    strokeLinecap=" round" 
                    strokeLinejoin=" round" 
                  >
                    <polyline points=" 6 9 12 15 18 9" ></polyline>
                  </svg>
                </button>
                <button className=" inline-flex items-center h-8 pl-2.5 pr-2 rounded-md shadow text-gray-400 border-gray-800 border leading-none py-0" >
                  Filter by
                  <svg
                    viewBox=" 0 0 24 24" 
                    className=" w-4 ml-1.5 text-gray-600" 
                    stroke=" currentColor" 
                    strokeWidth=" 2" 
                    fill=" none" 
                    strokeLinecap=" round" 
                    strokeLinejoin=" round" 
                  >
                    <polyline points=" 6 9 12 15 18 9" ></polyline>
                  </svg>
                </button>
                <div className=" ml-auto text-xs sm:inline-flex hidden items-center" >
                  <span className=" mr-3" >Page 2 of 4</span>
                  <button className=" inline-flex mr-2 items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none py-0" >
                    <svg
                      className=" w-4" 
                      viewBox=" 0 0 24 24" 
                      stroke=" currentColor" 
                      strokeWidth=" 2" 
                      fill=" none" 
                      strokeLinecap=" round" 
                      strokeLinejoin=" round" 
                    >
                      <polyline points=" 15 18 9 12 15 6" ></polyline>
                    </svg>
                  </button>
                  <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none py-0" >
                    <svg
                      className=" w-4" 
                      viewBox=" 0 0 24 24" 
                      stroke=" currentColor" 
                      strokeWidth=" 2" 
                      fill=" none" 
                      strokeLinecap=" round" 
                      strokeLinejoin=" round" 
                    >
                      <polyline points=" 9 18 15 12 9 6" ></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              <table className=" w-full text-left" >
                <thead>
                  <tr className="" >
                    <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800" >
                      Type
                    </th>
                    <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800" >
                      Where
                    </th>
                    <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800 hidden md:table-cell" >
                      Description
                    </th>
                    <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800" >
                      Amount
                    </th>
                    <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800 sm:text-gray-400 text-white" >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-100">
                <tr>
                    <td className=" sm:p-3 py-2 px-1 border-b border-gray-800" >
                      <div className=" flex items-center" >
                        <svg
                          viewBox=" 0 0 24 24" 
                          className=" w-4 mr-5" 
                          stroke=" currentColor" 
                          strokeWidth=" 3" 
                          fill=" none" 
                          strokeLinecap=" round" 
                          strokeLinejoin=" round" 
                        >
                          <rect
                            x=" 1" 
                            y=" 4" 
                            width=" 22" 
                            height=" 16" 
                            rx=" 2" 
                            ry=" 2" 
                          ></rect>
                          <line x1=" 1"  y1=" 10"  x2=" 23"  y2=" 10" ></line>
                        </svg>
                        Card
                      </div>
                    </td>
                    <td className=" sm:p-3 py-2 px-1 border-b border-gray-800" >
                      <div className=" flex items-center" >
                        <svg
                          xmlns=" http://www.w3.org/2000/svg" 
                          viewBox=" 0 0 512 512" 
                          className=" w-7 h-7 p-1.5 mr-2.5 rounded-lg border border-gray-800" 
                        >
                          <path
                            fill=" #f44336" 
                            d=" M201.302 49.754l-192 24.939C3.949 75.384-.044 79.963 0 85.36v149.333c0 5.891 4.776 10.667 10.667 10.667h192c5.891 0 10.667-4.776 10.667-10.667V60.314c-.004-3.064-1.325-5.978-3.627-8-2.319-1.994-5.368-2.923-8.405-2.56z" 
                          />
                          <path
                            fill=" #4caf50" 
                            d=" M508.374 13.36c-2.286-2.06-5.35-3.032-8.405-2.667l-256 33.387c-5.352.691-9.346 5.27-9.301 10.667v179.947c0 5.891 4.776 10.667 10.667 10.667h256c5.891 0 10.667-4.776 10.667-10.667V21.36c-.005-3.064-1.327-5.978-3.628-8z" 
                          />
                          <path
                            fill=" #2196f3" 
                            d=" M202.667 266.693h-192C4.776 266.693 0 271.469 0 277.36v149.333c-.044 5.397 3.949 9.976 9.301 10.667l192 25.045c.455.031.911.031 1.365 0 5.891 0 10.667-4.776 10.667-10.667V277.36c.001-5.891-4.775-10.667-10.666-10.667z" 
                          />
                          <path
                            fill=" #ffc107" 
                            d=" M501.334 266.693h-256c-5.891 0-10.667 4.776-10.667 10.667v179.947c-.044 5.397 3.949 9.976 9.301 10.667l256 33.387c.455.031.911.031 1.365 0 5.891 0 10.667-4.776 10.667-10.667V277.36c0-5.891-4.775-10.667-10.666-10.667z" 
                          />
                        </svg>
                        Microsoft
                      </div>
                    </td>
                    <td className=" sm:p-3 py-2 px-1 border-b border-gray-800 md:table-cell hidden" >
                      Subscription renewal
                    </td>
                    <td className=" sm:p-3 py-2 px-1 border-b border-gray-800 text-red-500" >
                      - $9.99
                    </td>
                    <td className=" sm:p-3 py-2 px-1 border-b border-gray-800" >
                      <div className=" flex items-center" >
                        <div className=" sm:flex hidden flex-col" >
                          24.12.2020
                          <div className=" text-xs" >07:16 AM</div>
                        </div>
                        <button className=" w-8 h-8 inline-flex items-center justify-center ml-auto" >
                          <svg
                            viewBox=" 0 0 24 24" 
                            className=" w-5" 
                            stroke=" currentColor" 
                            strokeWidth=" 2" 
                            fill=" none" 
                            strokeLinecap=" round" 
                            strokeLinejoin=" round" 
                          >
                            <circle cx=" 12"  cy=" 12"  r=" 1" ></circle>
                            <circle cx=" 19"  cy=" 12"  r=" 1" ></circle>
                            <circle cx=" 5"  cy=" 12"  r=" 1" ></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className=" flex w-full mt-5 space-x-2 justify-end" >
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none" >
                  <svg
                    className=" w-4" 
                    viewBox=" 0 0 24 24" 
                    stroke=" currentColor" 
                    strokeWidth=" 2" 
                    fill=" none" 
                    strokeLinecap=" round" 
                    strokeLinejoin=" round" 
                  >
                    <polyline points=" 15 18 9 12 15 6" ></polyline>
                  </svg>
                </button>
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none" >
                  1
                </button>
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 bg-gray-800 text-white leading-none" >
                  2
                </button>
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none" >
                  3
                </button>
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none" >
                  4
                </button>
                <button className=" inline-flex items-center h-8 w-8 justify-center rounded-md shadow border border-gray-800 leading-none" >
                  <svg
                    className=" w-4" 
                    viewBox=" 0 0 24 24" 
                    stroke=" currentColor" 
                    strokeWidth=" 2" 
                    fill=" none" 
                    strokeLinecap=" round" 
                    strokeLinejoin=" round" 
                  >
                    <polyline points=" 9 18 15 12 9 6" ></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default PaymentPage;
