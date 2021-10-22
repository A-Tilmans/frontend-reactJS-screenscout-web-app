import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const LogIn = () => {
    const history = useHistory();
    const {logInUser} = useContext(AuthContext);
    const {handleSubmit, register} = useForm();

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        try {
            const response = await axios.post(
                `https://polar-lake-14365.herokuapp.com/api/auth/signin`,
                {
                    username: data.username,
                    password: data.password,
                })
            logInUser(response.data.accessToken);
            setTimeout(() => {
                history.push('/tv-suggestions')
            }, 3000);
        } catch (e) {
            setError('Oops, something went wrong! Please try again.');
            console.error(e);
        }
        toggleLoading(false);
    }

    return (
        <>
            <div className="background-container">
                <div className="container">
                    <div className="title">
                        Log in
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="register-form">

                        <div className="form">
                            <div className="input-field">
                                <input
                                    className="input"
                                    name="username"
                                    placeholder="Username"
                                    type="text"
                                    {...register("username", {required: true})}
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    className="input"
                                    name="email"
                                    placeholder="Email"
                                    type="text"
                                    {...register("email", {required: true})}
                                />
                            </div>
                            <div className="input-field">
                                <input
                                    className="input"
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    {...register("password", {required: true})}
                                />
                            </div>

                            {error && <p className="error-message">{error}</p>}

                            {loading &&
                            <p>We're attempting to log you in - just a second!</p>}

                            <button
                                type="submit"
                                className="sign-in-form"
                            >Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LogIn;