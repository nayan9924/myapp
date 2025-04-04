import React from "react";
import { appContext } from "../App";
import { useContext } from "react";
export default function Orders() {
  const { orders, cart ,user , setUser} = useContext(appContext);
  return (
    <div>
      <h3>My Orders</h3>

      <ol>
        {orders.map((value) => (
          value.email === user.email && (
            <li>
            {value.orderDate}-{Object.keys(value.items).length}-{value.status}-{user.email}-
            {value.total}
          </li>
          )
        ))}
      </ol>
      <hr></hr>
    </div>
  );
}