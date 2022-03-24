import React from 'react';
import { useState } from 'react';
import '../App.css';
import axios from 'axios';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let onSubmit = (e) => {
        e.preventDefault();

        const data = {
            username,
            password
        }

        axios
            .post('http://localhost:8080/api/users/login', data)
            .then(res => {
                setUsername('');
                setPassword('');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="d-flex card p-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Login</h2>
                    <form className="text-center" onSubmit={e => {onSubmit(e)}}>
                        <div className="form-group">
                        
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                    
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;