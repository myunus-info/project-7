import React from "react";
import "./Players.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
  const { img, name, phone, salary, email } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="cart-text">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <p>${salary}</p>
        <button onClick={() => handleAddPlayer(props.player)}>
          Add Player &nbsp;
          <FontAwesomeIcon icon={faUserPlus} />
        </button>
      </div>
    </div>
  );
};

export default Players;
