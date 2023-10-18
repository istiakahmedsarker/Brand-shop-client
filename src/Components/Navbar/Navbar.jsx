import { Link, NavLink } from "react-router-dom";
const navButtons = () => {

    return (
        < >
            <li >
                <NavLink to="/">News</NavLink>
            </li>
            <li >
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li >
                <NavLink to="/addProduct">Add Product</NavLink>
            </li>
            <li >
                <NavLink to="/login">Login</NavLink>
            </li>
            <li >
                <NavLink to="/register">Register</NavLink>
            </li>
        </>
    );
}
const Navbar = () => {
    // const { user, signOutFunction } = useContext(AuthContext);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 block select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        {
                            navButtons()
                        }

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Tech and Games</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {
                        navButtons()
                    }
                </ul>
            </div>
            <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={'user?.photoURL'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">displayName</button>

                                </li>
                                <li>
                                    <button className="block select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        >Sign Out</button>
                                </li>
                            </ul>
                        </div>
                            <Link className="block select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                                to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;