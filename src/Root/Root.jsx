import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Toaster } from "react-hot-toast";

const Root = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    
    return (
        <div className="font-primary" style={{ overflowX: "hidden" }}>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster 
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Root;