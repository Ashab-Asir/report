import React from 'react';
import axios from 'axios';
const Register = () => {
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
            phone: phone
        };
        axios.post('https://yourapiendpoint.com/register', userData)
            .then(response => {
            console.log('Registration successful:', response.data);
            })
            .catch(error => {
            console.error('There was an error registering!', error);
            });
        // password validation: 
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="card-body">
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