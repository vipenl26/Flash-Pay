import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "./Footer /Footer";
import Intro from "./Intro/Intro";
import Navbar from "./Navbar/Navbar";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import PaymentPage from "./PaymentPage/PaymentPage";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Form from "./AddMoney/Form/Form";
import Profile from "./Profile/Profile"
const MainComponent = () => {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("userid")!=null);
  const [username, setUsername] = useState("X");
  useEffect(() => {
    setTimeout(() => {
      setLoadingScreen(false);
    }, 2800);
    // window.location="/dashboard";
  });

  return (
    <Router>
      {loadingScreen && <Intro />}
      {!loadingScreen && (
        <React.Fragment>
          {isLogin?<React.Fragment>
            <Navbar setIsLogin={setIsLogin} username={username}/>
            <Routes>
              <Route
                path="/dashboard"
                exact
                element={
                  <React.Fragment>
                    <Dashboard setUsername={setUsername}/>
                    {/* <TransactionHistory /> */}
                  </React.Fragment>
                }
              />
              <Route path="/payments" element={<PaymentPage />} />
              <Route path="/AddMoney"  element={<Form/>}/>
              <Route path="/Profile" element={<Profile></Profile>}/>
              <Route path="*" element={<Navigate replace to="/dashboard" />} />
            </Routes>
            <Footer />
          </React.Fragment>:
          <Routes>
            <Route  path="/login" element={<Login setIsLogin={setIsLogin}/>}/>
            <Route  path="/signup" element={<Signup/>}/>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          }
        </React.Fragment>
      )}
    </Router>
  );
};

export default MainComponent;
