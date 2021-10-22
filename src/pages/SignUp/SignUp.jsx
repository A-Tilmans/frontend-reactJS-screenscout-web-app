import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './SignUp.css';

const SignUp = () => {
    const history = useHistory();
    const {formState: {errors}, handleSubmit, register} = useForm();
    const [error, setError] = useState(false);
    const [registerComplete, toggleRegisterComplete] = useState(false);

    async function onSubmit(data) {
        setError('');
        try {
            const response = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signup`, {
                email: data.email,
                username: data.username,
                password: data.password,
            })
            toggleRegisterComplete(true);
            setTimeout(() => {
                history.push('/login')
            }, 3000);
        } catch (e) {
            setError('An error was encountered - please try again!');
            console.error(e);
        }
    }

    return (
        <div className="background-container">
            <div className="container">
                <div className="title">
                    Sign up
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
                                {...register("email",
                                    {required: true,
                                    pattern: /^\S+@\S+$/})}
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
                        {errors.email && errors.email.type === "pattern" && <p className="error-message">Invalid email, must contain '@'!</p>}
                        {registerComplete &&
                        <p>Registration complete! Just a moment, you will be redirected shortly.</p>}

                        <button
                            type="submit"
                            className="sign-up-form"
                        >Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;