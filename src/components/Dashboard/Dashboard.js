import React from "react";
import { useEffect ,useState, useCallback} from "react";
//flex items-center justify-center
const Dashboard = () => {
  const [balance, setBalance] = useState(420);
  const loopBalance = useCallback(()=>{
    const balanceTag = document.getElementById('balance');
    const amount = balance;
    for(let i=0;i<=amount;i++){
      setTimeout(()=>{setBalance(i)}, i*3);
    }
  })
  useEffect(() => {
    loopBalance();
  }, [])
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-gray-400  h-72 sm:h-96 rounded-2xl my-5 pt-2 sm:pt-10 mx-10">
      <div className=" transform hover:-translate-y-1 transition items-center justify-center inline-flex mx-5  bg-green-400 hover:bg-yellow-300 rounded-full h-40 w-40 sm:h-60 sm:w-60 shadow-lg">
        <div className="h-36 w-36 sm:h-56 sm:w-56 bg-indigo-500 rounded-full hover:bg-indigo-400">
          <div className=" py-6 text-center text-1xl sm:text-2xl text-gray-600">
            Balance
          </div>
          <div id="balance" className="text-center block  text-3xl sm:text-7xl text-white">
            <button onClick={loopBalance}>{balance}</button>
          </div>
        </div>
      </div>
      <button className="mb-4 px-4 py-3 my-2 text-sm font-bold rounded no-underline hover:shadow-md bg-blue-600 text-white">
        Add Money
      </button>
      <button className="align-middle float-right mx-10  px-6 py-4  text-xs sm:text-lg font-bold rounded-full no-underline hover:shadow-lg bg-yellow-400 text-white">
        Make Payment
      </button>
    </div>
  );
};

export default Dashboard;
