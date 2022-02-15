import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Form from "../AddMoney/Form/Form";
//flex items-center justify-center
const Dashboard = (props) => {
  const [balance, setBalance] = useState(0);
  const loopBalance = useCallback(() => {
    const amount = balance;
    for (let i = 0,j=0; i <= amount; i+=amount/100,j++) {
      setTimeout(() => {
        setBalance(parseInt(i));
      }, j* 6);
    }
    setTimeout(() => {
      setBalance(amount);
    }, 200* 6);
  });
  useEffect(() => {
    const url = "http://localhost:3001/getdata";
    fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({"userid": localStorage.getItem("userid")}) // body data type must match "Content-Type" header
    })
    .then((res)=>{
      return res.json();
    })
    .then(data => {
      localStorage.setItem("data", JSON.stringify(data))
      setBalance(data.balance)
      props.setUsername(data.username)
    })
    .catch((err)=>{
      
    })

    return ()=>{
      // loopBalance()
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-gray-400  h-72 sm:h-96 rounded-2xl my-5 pt-2 sm:pt-10 mx-10">
      <div className=" transform hover:-translate-y-1 transition items-center justify-center inline-flex mx-5  bg-green-400 hover:bg-yellow-300 rounded-full h-40 w-40 sm:h-60 sm:w-60 shadow-lg">
        <div className="h-36 w-36 sm:h-56 sm:w-56 bg-indigo-500 rounded-full hover:bg-indigo-400">
          <div className=" py-6 text-center text-1xl sm:text-2xl text-gray-600">
            Balance
          </div>
          <div
            id="balance"
            className="text-center block  text-3xl sm:text-7xl text-white"
          >
            <button onClick={loopBalance}>{balance}</button>
          </div>
        </div>
      </div>
      <button  className="mb-4 px-4 py-3 my-2 text-sm font-bold rounded no-underline hover:shadow-md bg-blue-600 text-white">
       <NavLink to="/AddMoney">Add Money</NavLink>
      </button>
      <NavLink
        className="align-middle float-right mx-10  px-6 py-4  text-xs sm:text-lg font-bold rounded-full no-underline hover:shadow-lg bg-yellow-400 text-white"
        to="/payments"
        exact
      >
        Make Payment
      </NavLink>
    </div>
  );
};

export default Dashboard;
