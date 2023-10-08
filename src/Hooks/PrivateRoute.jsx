/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllContext } from "./ContextProvider";
import loader from "../assets/images/ldr.gif"
import { Navigate } from "react-router-dom";

export const LoaderComponent = () => {

    return <img className="max-w-[100px]" src={loader} alt="loading spinner" />
};


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AllContext)

    if (loading) {

        return <div className="h-screen flex justify-center items-center">
            <LoaderComponent />
        </div>
        
    }

    if(user) {

        return children;
    }

    return (
        <div>
            <Navigate to="/login" />
        </div>
    );
};

export default PrivateRoute;