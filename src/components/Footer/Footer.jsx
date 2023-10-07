import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-pink-600 text-white py-24">
            <div className="max-w-6xl mx-auto">
                <div className="nav flex justify-between items-center flex-wrap">
                    <div className="logo">
                        <h2 className="text-3xl">Eventive</h2>
                    </div>

                    <div className="text-white">
                        <div className="flex gap-5 items-center flex-wrap">
                            <Link to="/"
                                 
                            >
                                Home
                            </Link>

                            <Link to="/gallery"
                                 
                            >
                                Gallery
                            </Link>

                            <Link to="/team"
                                 
                            >
                                Team
                            </Link>

                            <Link to="/about"
                                 
                            >
                                About Us
                            </Link>

                            <Link to="/registration"
                                 
                            >
                                Registration
                            </Link>

                            <Link to="/login"
                                 
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;