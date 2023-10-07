import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Root = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    
    return (
        <div className="font-primary">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;