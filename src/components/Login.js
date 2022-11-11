import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Login = () => {
    const {loginWithEmailPassword, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const loginHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        loginWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                event.target.reset();
                navigate('/');
            }).catch((error) => {
                alert(error.message);
            });
    };

    const googleLoginHandler = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-4/5 mx-auto hero h-auto my-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={loginHandler}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to={"/"} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            Login with <button onClick={googleLoginHandler} className='btn btn-primary btn-sm'>Google</button>
                        </div>
                        <div>
                            Do you not registered? Please <Link to={"/register"} className="underline">Registered</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;