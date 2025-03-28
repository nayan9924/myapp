import React from "react";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const {user,setUser,users,setUsers} =useContext(appContext);
    const Navigate=useNavigate();
    const [msg, setMsg] = useState();
    const handleSubmit = () => {
        const found = users.find((value) => value.email === user.email);
        if (found) {
            setMsg("User already exists");
        } else {
            setUsers([...users, user]);
            setMsg();
            Navigate("/");
        }
    };
    const handleDelete = (email) => {
        setUsers(users.filter((value) => value.email != email));
    };
    return (
        <div className="App-Register-Row">
            <div>
                <h2>Registration Form</h2>
                {msg}
                <p>
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    ></input>
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="Email address"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    ></input>
                </p>
                <p>
                    <input
                        type="password"
                        placeholder="New password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    ></input>
                </p>
                <p>
                    <button onClick={handleSubmit}>Submit</button>
                </p>
                <p>
                    <Link to="../login">Already a member? Log In</Link>
                </p>
            </div>
            <div>
                {users &&
                    users.map((value, index) => (
                        <li>
                            {value.name}-{value.email}-{value.password}
                            <button onClick={() => handleDelete(value.email)}>Delete</button>
                        </li>
                    ))}
            </div>
        </div>
    );
}