import React from 'react'
import { useState, useEffect} from 'react'
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar';
import TransactionHistory from './TransactionHistory/TransactionHistory';
const MainComponent = () => {
    const [loadingScreen,setLoadingScreen] = useState(true);
    useEffect(() => {
        setTimeout(()=>{
            setLoadingScreen(false);
        },2800)
    }, )
    return (
        <React.Fragment>
            {loadingScreen && <Intro/>}
            {!loadingScreen && <React.Fragment>
                <Navbar/>
                <Dashboard/>
                <TransactionHistory/>
                <Footer/>
            </React.Fragment>}
        </React.Fragment>
    )
}

export default MainComponent
