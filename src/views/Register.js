import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

export default class Register extends Component {
    constructor(){
        super();

        this.state = {
            redirect: null

        }
    }

    createUser = (e) => {
        e.preventDefault();
        let userName = e.target.username.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirmPassword = e.target.confirmpassword.value;
        fetch('', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
                'Accept' : '*/*',
                'Authorization' : 'Bearer' +  localStorage.getItem('token')
            },
            body : JSON.stringify({
                'username' : userName,
                'email' : email,
                'password' : password,
                'confirmpassword' : confirmPassword
            })
        }).then(r => r.json())
        .then(data => {
            this.setState({
                redirect: '/info'
            })
        })
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <form>
                    <h5>Username</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="username"
                        placeholder="Username"
                    />
                    <h5>Email</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="email"
                        placeholder="Email"
                    />
                    <h5>Password</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="password"
                        placeholder="Password"
                    />
                    <h5 className=''>Confirm password</h5>
                    <input
                        type="text"
                        className="form-control mt-3"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                    />

                    <button type="submit" className="btn btn-outline-info mt-3">
                        Submit
          </button>
                </form>
            </div>
        );
    }
}
