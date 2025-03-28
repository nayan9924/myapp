import "./Products.css"
import { useContext, useState } from "react";
import { appContext } from "../App";

export default function Products() {
    const {user,setUser,users,setUsers} =useContext(appContext);
    const [msg,setMsg] = useState();
    <h3>{users.email}</h3>
    const products = [
        { id: 1, name: "Product 1", Price: 50 },
        { id: 1, name: "Product 2", Price: 45 },
        { id: 1, name: "Product 3", Price: 30 },
        { id: 1, name: "Product 4", Price: 55 },
        { id: 1, name: "Product 5", Price: 60 },
        { id: 1, name: "Product 6", Price: 50 },
    ];
    return (
        <>
            <div>
                <div className="App-products-row">
                    {products.map((value, index) => (
                        <div className="App-products-box">
                            <h3>{value.name}</h3>
                            <h4>{value.Price}</h4>
                            <button>Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
