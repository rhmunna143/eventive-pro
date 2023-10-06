import NavMenu from "./NavMenu";


const Nav = () => {
    return (
        <div className="max-w-6xl mx-auto flex justify-between items-center py-5 flex-wrap px-4 lg:px-0">
            <div className="logo">
                <h2 className="text-4xl font-bold font-primary text-pink-600">Eventive</h2>
            </div>

            <div className="menu">
                <NavMenu></NavMenu>
            </div>

            <div className="user">
                user info
            </div>
        </div>
    );
};

export default Nav;