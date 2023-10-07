import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


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

                <div className="text-center mt-20">
                    <h4 className="text-base">Find us on:-</h4>
                    <div className="text-2xl flex gap-5 text-center mx-auto w-fit mt-4">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>

                <div className="mt-10">
                    <hr />

                    <p className="text-xs text-center mt-10">
                        &copy; 2023 Eventive <br />
                        All rights reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;