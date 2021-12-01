import React from 'react'
import { useState, useEffect} from 'react'
import Footer from './Footer/Footer';
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar';
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
            <Navbar/>

            <Footer/>
        </React.Fragment>
    )
}

export default MainComponent
