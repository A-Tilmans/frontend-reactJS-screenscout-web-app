import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const history = useHistory();
    const [userAuth, setUserAuth] = useState({
        user: null,
        status: 'pending'
    });

    async function getUserInfo(accessToken) {
        try {
            const response = await axios.get(`https://polar-lake-14365.herokuapp.com/api/user`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,
                }
            });
            setUserAuth({
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id
                },
                status: 'done'
            });
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== undefined && userAuth.user === null) {
            getUserInfo(token);
        } else {
            setUserAuth({
                user: null,
                status: 'done'
            });
        }
    }, []);

    function logOutUser() {
        localStorage.clear();
        setUserAuth({
            user: null,
            status: 'done'
        });
        history.push('/');
    }


    function logInUser(accessToken) {
        localStorage.setItem('token', accessToken);
        getUserInfo(accessToken);
    }

    const data = {
        ...userAuth,
        logInUser: logInUser,
        logOutUser: logOutUser,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;