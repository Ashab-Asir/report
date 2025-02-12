import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        console.log(e.target)
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const userData = {
            email: email,
            password: password,
            phoneNumber: phone
        };
        console.log(email, password, phone)
        axios.post('http://localhost:5000/api/register', userData)
            .then(response => {
                console.log('Registration successful:', response.data);
                setErrorMessage(''); // Clear any previous error messages
            })
            .catch(error => {
                console.error('There was an error registering!', error);
                if (error.response && error.response.status === 400) {
                    setErrorMessage('Registration failed: ' + error.response.data.message);
                } else {
                    setErrorMessage('There was an error registering!');
                }
            });
        // password validation: 
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
                    {errorMessage && <div className="alert alert-error">{errorMessage}</div>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" name='phone' placeholder="phone number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name ='password'placeholder="password" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Register;