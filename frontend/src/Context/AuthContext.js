import React, { createContext, useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

<<<<<<< HEAD
// Initial state and reducer
=======

>>>>>>> 9f4db9f (changes)
const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuthenticated: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null };
        default:
            return state;
    }
};

<<<<<<< HEAD
// Provider component
=======

>>>>>>> 9f4db9f (changes)
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    const login = (user) => {
        console.log("Logging in user:", user);
        dispatch({ type: 'LOGIN', payload: user });
<<<<<<< HEAD
        Cookies.set('user', JSON.stringify(user), { expires: 7 }); // Set to expire in 7 days
=======
        Cookies.set('user', JSON.stringify(user), { expires: 7 });
>>>>>>> 9f4db9f (changes)
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
<<<<<<< HEAD
        Cookies.remove('user'); // Remove cookie
=======
        Cookies.remove('user'); 
>>>>>>> 9f4db9f (changes)
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return React.useContext(AuthContext);
};
