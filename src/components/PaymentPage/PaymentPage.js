import { deepStrictEqual } from "assert";
import { DESTRUCTION } from "dns";
import React from "react";
import { useState ,useEffect} from "react";
// Card, Microsoft, renewal, -69, 24.12.2020, 07:16 AM

const transaction = (type, where, description, amount, date, time) => {
  date = date.toString().replace("T", "  ")
  date = date.replace("Z", " ")
  
  return (
    <tr class=" bg-gray-900">
      <td className=" sm:p-3 py-2 px-1 border-b border-gray-800">
        <div className=" flex items-center">{type}</div>
      </td>
      <td className=" sm:p-3 py-2 px-1 border-b border-gray-800">
        <div className=" flex items-center">{where}</div>
      </td>
      <td className=" sm:p-3 py-2 px-1 border-b border-gray-800 md:table-cell hidden">
        {description}
      </td>
      {amount >= 0 ? (
        <td className=" sm:p-3 py-2 px-1 border-b border-gray-800 text-green-500">
          +{amount}
        </td>
      ) : (
        <td className=" sm:p-3 py-2 px-1 border-b border-gray-800 text-red-500">
          {amount}
        </td>
      )}
      <td className=" sm:p-3 py-2 px-1 border-b border-gray-800">
        <div className=" flex items-center">
          <div className=" sm:flex hidden flex-col">
            {date}
            <div className=" text-xs">{time}</div>
          </div>
          <button className=" w-8 h-8 inline-flex items-center justify-center ml-auto">
            <svg
              viewBox=" 0 0 24 24"
              className=" w-5"
              stroke=" currentColor"
              strokeWidth=" 2"
              fill=" none"
              strokeLinecap=" round"
              strokeLinejoin=" round"
            >
              <circle cx=" 12" cy=" 12" r=" 1"></circle>
              <circle cx=" 19" cy=" 12" r=" 1"></circle>
              <circle cx=" 5" cy=" 12" r=" 1"></circle>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};
// const ls =fetch(`http://localhost:3001/payments/${localStorage.getItem("userid")}`);
// console.log(ls[0])
// ls=ls.payments
  const SendMoney=(dest,amount)=>{
    if(amount < 0 || isNaN(amount)){
      alert("enter valid amount")
      return
    }

    const url = `http://localhost:3001/payments`;
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body:  JSON.stringify({
        paymentType:"online Flash Pay",
        paymentSource:localStorage.getItem("userid"),
        paymentDestination:dest,
        paymentDescription:"payment testing",
        amount:amount,
      }) // body data type must match "Content-Type" header
    })
    .then((res)=>{
      return res.json()
    })
    .then(data => {
        alert(data.message);
    })
    .catch((err)=>{
      console.log(err)
    })
  }



    

const PaymentPage = () => {
  const [limit, setLimit] = useState(0)
  const [ls, setLs] = useState([])
  useEffect(()=>{
    const payments = JSON.parse(localStorage.getItem("data")).payments;
    //type, where, description, amount, date, time
    for(let i=0;i<payments.length;i++){
      ls.push([payments[i].paymentType, payments[i].paymentDestination, payments[i].paymentDescription, payments[i].amount, payments[i].dateOfTransaction, ""]);
    }
    ls.reverse();
  },[])
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
            placeholder="Enter Receiptant" id="dest"
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-yellow-400 hover:bg-yellow-500">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="container flex justify-center py-11">
        <div className="relative">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
          </div>
          <input
            type="text"
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Enter Amount" id="amount"
          />
          <div className="absolute top-2 right-2">
            <button  onClick={()=>SendMoney(document.getElementById("dest").value.toString(),document.getElementById("amount").value.toString())} className="h-10 w-40 text-white rounded-lg bg-yellow-400 hover:bg-yellow-500">
             Make Payment 
            </button>
          </div>
        </div>
      </div>
      

      <div className="  text-white text-sm">
        <div className=" flex-grow overflow-hidden h-full flex flex-col">
          <div className=" flex-grow flex overflow-x-hidden">
            <div className=" flex-grow   overflow-y-auto">
              <div className=" sm:p-7 p-4 bg-gray-700">
                <table className=" w-full text-left">
                  <thead>
                    <tr className="">
                      <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                        Type
                      </th>
                      <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                        Where
                      </th>
                      <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800 hidden md:table-cell">
                        Description
                      </th>
                      <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800">
                        Amount
                      </th>
                      <th className=" font-normal px-3 pt-0 pb-3 border-b border-gray-800 sm:text-gray-400 text-white">
                        Date
                      </th>
                    </tr>
                    {ls.map((x) => transaction(...x)).slice(0, limit)}
                  </thead>
                  <tbody className="text-gray-100"></tbody>
                </table>
                <button onClick={()=>setLimit(x=>x+5)} class=" text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Load More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PaymentPage;



