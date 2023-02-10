import { deepStrictEqual } from "assert";
import { DESTRUCTION } from "dns";
import React from "react";
import { useEffect} from "react";
// Card, Microsoft, renewal, -69, 24.12.2020, 07:16 AM
import useForm from './useForm'


import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


const doesUserExist = (userName) => {
  const url = (process.env.REACT_APP_BACKEND || "http://localhost:3001") + '/verifyUser'
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
    body: JSON.stringify({username: userName}) // body data type must match "Content-Type" header
  })
  .then((res)=>{
    if (res.status==200) {
      alert("User found")
    }
    else {
      alert("User not found")
    }
  })
  .catch((err)=>{
    
  })
}

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

    const url = (process.env.REACT_APP_BACKEND || "http://localhost:3001") + `/payments`;
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
  const [open, setOpen] = useState(false)


  const [MoneyDetails,setDetails]=useForm({dest:"",amount:""})





  function Confirm(props) {
  
    const cancelButtonRef = useRef(null)
    
    function inWords (num) {
      var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
        if ((num = num.toString()).length > 9) return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'rupees ' : '';
        return str;
    }
    
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        
                        Confirm payment
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to pay <b className="text-base font-bold ">{inWords(MoneyDetails.amount)} only</b> to <b className="text-base font-bold ">{MoneyDetails.dest}</b> ?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => {setOpen(false);return SendMoney(MoneyDetails.dest,MoneyDetails.amount)}}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    )
  }



  










  const [ls, setLs] = useState([])
  useEffect(()=>{
    const payments = JSON.parse(localStorage.getItem("data")).payments;
    //type, where, description, amount, date, time
    for(let i=0;i<payments.length;i++){
      ls.push([payments[i].paymentType, payments[i].paymentDestination, payments[i].paymentDescription, payments[i].amount, payments[i].dateOfTransaction, ""]);
    }
    ls.reverse();
    setLimit(5)
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
            placeholder="Enter Receiptant" id="dest" name="dest" onChange={setDetails}
          />
          <div className="absolute top-2 right-2">
            <button className="h-10 w-20 text-white rounded-lg bg-yellow-400 hover:bg-yellow-500" onClick={() => doesUserExist(MoneyDetails.dest)}>
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
            className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"  name="amount" onChange={setDetails}
            placeholder="Enter Amount" id="amount"
          />
          <div className="absolute top-2 right-2">
            <button  onClick={()=>setOpen(true)} className="h-10 w-40 text-white rounded-lg bg-yellow-400 hover:bg-yellow-500">
             Make Payment 
            </button>
            <Confirm></Confirm>
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



