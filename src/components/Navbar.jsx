import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error));
    };
    
    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/all">All Craft Items</NavLink></li>
            <li><NavLink to="/add">Add Craft Items</NavLink></li>
            {user && <li><NavLink to="/update">My Craft List</NavLink></li>}
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-1xl lg:text-2xl font-bold">Rustic<span className='text-[#BA4A00]'>Chic</span>Crafts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
    {user ? (
        <>
            <div className="tooltip tooltip-left" data-tip={user.displayName}>
                <span><img className='rounded-full size-[30px]' src={user.photoURL} alt="" /></span>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm  bg-[#BA4A00] border-[#BA4A00] text-white ml-1">Logout</button>
        </>
    ) : (
        <>
            <Link to="/login"><button className="btn btn-sm bg-[#BA4A00] border-white text-white">Login</button></Link>
            <Link to="/register"><button className="btn btn-sm bg-[#BA4A00] border-white text-white hidden lg:block">Register</button></Link>
        </>
    )}
</div>

        </div>
    );
};

export default Navbar;