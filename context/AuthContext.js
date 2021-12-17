
import {createContext, useState, useEffect} from 'react';
import {userRouter} from 'next/router';
import API_URL from '@/config/index';


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const register = async (user) => {
        console.log(user);
    }
    
    const login = async ({email:identifier, password}) => {
        console.log({identifier, password});
    }
    
    const logout = async () => {
        console.log('Logout');
    }
    
    const checkUserLoggedIn = async () => {
        console.log('check');
    }

    return (
        <AuthContext.Provider value={{user, error, register, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
