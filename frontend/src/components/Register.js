import React from 'react';
import { useState, useContext } from 'react';
import '../App.css';
import axios from 'axios';
import { UserContext } from '../context/UserContext'

function Register(props) {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userContext, setUserContext] = useContext(UserContext);

    let onSubmit = (e) => {
        e.preventDefault();

        const data = {
            email,
            username,
            password
        }

        axios
            .post('http://localhost:8080/api/users/register', data)
            .then(res => {
                console.log(res);
                setEmail('');
                setUsername('');
                setPassword('');
                const data = res.data;
                setUserContext(oldValues => {
                    return { ...oldValues, token: data.token }
                  })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="d-flex card p-4">
                <div className="card-body">
                    <h2 className="card-title text-center">Register</h2>
                    <form className="text-center" onSubmit={e => {onSubmit(e)}}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control"
                                placeholder="Email address" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                   
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

export default Register;