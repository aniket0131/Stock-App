import React, { createContext, useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

// Initial state and reducer
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

// Provider component
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
        Cookies.set('user', JSON.stringify(user), { expires: 7 }); // Set to expire in 7 days
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        Cookies.remove('user'); // Remove cookie
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
