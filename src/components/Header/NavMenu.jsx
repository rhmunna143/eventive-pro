import { NavLink } from "react-router-dom";


const NavMenu = () => {
    return (
        <div className="flex gap-5 items-center flex-wrap">
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Home
            </NavLink>

            <NavLink to="/gallery"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Gallery
            </NavLink>

            <NavLink to="/team"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Team
            </NavLink>

            <NavLink to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                About Us
            </NavLink>
            
            <NavLink to="/registration"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Registration
            </NavLink>
            
            <NavLink to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Login
            </NavLink>
        </div>
    );
};

export default NavMenu;