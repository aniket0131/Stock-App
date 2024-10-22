import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Navbar() {
    const { state, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login');
    };
    console.log(state.isAuthenticated,"statussssssssss");
    return (
        <nav className="bg-gray-800 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
<<<<<<< HEAD
                {/* Logo */}
=======
               
>>>>>>> 9f4db9f (changes)
                <div className="text-white text-xl font-bold">
                    StockApp
                </div>

<<<<<<< HEAD
                {/* Navigation Links */}
=======
               
>>>>>>> 9f4db9f (changes)
                <div className="flex space-x-4">
                    <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                        Dashboard
                    </Link>
                    <Link to="/watchlist" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                        Watchlist
                    </Link>
                </div>

<<<<<<< HEAD
                {/* Logout Button */}
=======
               
>>>>>>> 9f4db9f (changes)
                {state.isAuthenticated && (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                )}
<<<<<<< HEAD
                {!state.isAuthenticated && ( // Optionally show the Login link if the user is not authenticated
=======
                {!state.isAuthenticated && ( 
>>>>>>> 9f4db9f (changes)
                    <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
