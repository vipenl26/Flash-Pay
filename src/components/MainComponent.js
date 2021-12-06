import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect} from 'react'
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import PaymentPage from './PaymentPage/PaymentPage';
const MainComponent = () => {
    const [loadingScreen,setLoadingScreen] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoadingScreen(false);
        },2800)
        // window.location="/dashboard";
    }, )

    return (
        <Router>
            {loadingScreen && <Intro/>}
            {!loadingScreen &&
             <React.Fragment>
                <Navbar/>
                    <Routes>
                        <Route path="/dashboard" exact element={
                            <React.Fragment>
                                <Dashboard/>
                                <TransactionHistory/>
                            </React.Fragment>
                        }/>
                        <Route path="/payments" element={<PaymentPage/>}/>
                    </Routes>
                <Footer/>
            </React.Fragment>}
        </Router>
    )
}

export default MainComponent
