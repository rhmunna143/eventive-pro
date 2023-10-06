import { Outlet } from "react-router-dom";
import Nav from "../components/Header/Nav";


const Root = () => {
    return (
        <div className="font-primary">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;