import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Header = () => {
    const {user, setUser, logOut} = useContext(AuthContext);
    const logOutHandler = () => {
        logOut()
            .then(() => {
                setUser(null);
            }).catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        {
                            user?.uid &&
                            <>
                                <li><Link to={`/myreviews/${user?.email}`}>My Reviews</Link></li>
                                <li><Link to={'/addservices'}>Add Services</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-primary normal-case text-xl">Site Name</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    {
                        user?.uid &&
                        <>
                            <li><Link to={`/myreviews/${user?.email}`}>My Reviews</Link></li>
                            <li><Link to={'/addservices'}>Add Services</Link></li>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid
                        ? <button onClick={logOutHandler} className='btn btn-primary'>Logout</button>
                        : <Link to={"/login"} className='btn btn-primary'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;