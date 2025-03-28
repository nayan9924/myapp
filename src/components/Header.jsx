import "./Header.css";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";

export default function Header(){
    const {users,setUsers,user,setUser} = useContext(appContext)
    return(
        <div className="App-Header-Row">
            <div>React Store [{user.name}]</div>
            <div>
                <Link to="home">Home</Link> |
                <Link to="cart">Cart</Link> | 
                <Link to="login">Login</Link> 
            </div>
        </div>
    )
}