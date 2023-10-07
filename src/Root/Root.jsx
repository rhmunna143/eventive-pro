import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className="font-primary">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;