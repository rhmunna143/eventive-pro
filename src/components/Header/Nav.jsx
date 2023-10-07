import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import userShape from "../../assets/images/user-shape.png"

const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto flex justify-between items-center py-5 flex-wrap px-4 lg:px-0">
            <Link to="/">
                <div className="logo">
                    <h2 className="text-4xl font-bold font-primary text-pink-600 mb-4 md:mb-0">Eventive</h2>
                </div>
            </Link>

            <div className="menu">
                <NavMenu></NavMenu>
            </div>

            <div className="user">
                <img className="w-12 h-12 aspect-square rounded-full" src={userShape} alt="user shape img" />
            </div>
        </div>
    );
};

export default Nav;