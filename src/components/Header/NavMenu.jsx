import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AllContext } from "../../Hooks/ContextProvider";


const NavMenu = () => {
    const { user } = useContext(AllContext)

    return (
        <div className="flex gap-5 items-center flex-wrap text-center justify-center">
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Home
            </NavLink>

            {
                user && <NavLink to="/gallery"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                    }
                >
                    Gallery
                </NavLink>
            }

            {
                user && <NavLink to="/team"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                    }
                >
                    Team
                </NavLink>
            }

            <NavLink to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                About Us
            </NavLink>

            <NavLink to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-white bg-pink-600 py-1 px-2 rounded-sm" : "text-pink-600"
                }
            >
                Contact
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