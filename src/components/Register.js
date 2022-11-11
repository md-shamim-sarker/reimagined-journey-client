import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../contexts/UserContext';

const Register = () => {
    const {createUserPassword} = useContext(AuthContext);

    const registerHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                event.target.reset();
                alert("Account is created!");
            })
            .catch((error) => {
                console.log(error);
                alert("An error is occured!");
            });
    };

    return (
        <div className="w-4/5 mx-auto hero h-auto my-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={registerHandler}>
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
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div>
                            Are you registered? Please <Link to={"/login"} className="underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;