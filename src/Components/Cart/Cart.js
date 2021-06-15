import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const players = props.players;
  const annualTotalSalary = players.reduce((acc, crr) => acc + +crr.salary, 0);

  return (
    <div className="cart">
      <div className="summary">
        <h3 style={{ fontWeight: "bolder", fontSize: "27px" }}>
          Players' Summary
        </h3>
        <h3>Players selected: {players.length} </h3>
        <h3>Players &amp; Annual salary</h3>
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              {player.name}, ${player.salary}
            </li>
          ))}
        </ul>

        <h3>Annual Total Salary:</h3>
        <p>${annualTotalSalary}</p>
      </div>
    </div>
  );
};

export default Cart;
