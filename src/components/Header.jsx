import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { appContext } from "../App";
import Orders from "./Orders";
export default function Header() {
  const { user, setUser, cart, products,orders} = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
  const [myOrder,setMyorder] =useState([]);
  useEffect(() => {
    setMyorder(orders.filter((value) => value.email === user.email));
  },[Orders,user]);
  console.log(items);
  return (
    <div className="App-Header-Row">
      <div>React Store</div>
      <div>
        <Link to={"/"}>Home</Link>-
        <Link to={"/cart"}>Cart({items.length})</Link>-
        {myOrder.length >0 && (
          <Link to={"/orders"}>Orders({myOrder.length})</Link>
        )}
        {user.email === "" ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link
            to={"/login"}
            onClick={() =>
              setUser({ ...user, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}