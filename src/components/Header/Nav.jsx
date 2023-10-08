import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import userShape from "../../assets/images/user-shape.png"
import { useContext } from "react";
import { AllContext } from "../../Hooks/ContextProvider";
import { LoaderComponent } from "../../Hooks/PrivateRoute";

const Nav = () => {
    const { user, logout, loading } = useContext(AllContext)

    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center md:gap-5 lg:justify-between items-center py-5 px-4 lg:px-0">
            <Link to="/">
                <div className="logo">
                    <h2 className="text-4xl font-bold font-primary text-pink-600 mb-4 md:mb-0">Eventive</h2>
                </div>
            </Link>

            <div className="menu">
                <NavMenu></NavMenu>
            </div>

            {
                loading ? <LoaderComponent /> :

                    <div className="user flex items-center mt-4 md:mt-0 gap-4">

                        {
                            user && <p>{user?.displayName}</p>
                        }

                        {
                            user ?
                                <img className="w-12 h-12 aspect-square rounded-full" src={user?.photoURL} alt="user DP image" />
                                :
                                <img className="w-12 h-12 aspect-square rounded-full" src={userShape} alt="user shape img" />
                        }

                        {
                            user ?
                                <Link><button onClick={logout} className="bg-pink-600 text-white hover:bg-black py-1 px-2 rounded-sm">Logout</button></Link>
                                :
                                <Link to="/login"><button className="bg-pink-600 text-white hover:bg-black py-1 px-2 rounded-sm">Login</button></Link>
                        }
                    </div>
            }
        </div>
    );
};

export default Nav;