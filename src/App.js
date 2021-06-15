import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import playersData from "./playersData/playersData";
import Cart from "./Components/Cart/Cart";
import Players from "./Components/Players/Players";

function App() {
  const [playersInfo, setPlayersInfo] = useState([]);
  let [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayersInfo(playersData);
  }, []);

  const handleAddPlayer = (player) => {
    players = [...players, player];
    setPlayers(players);
  };

  return (
    <div>
      <Header></Header>
      <div className="div-container">
        <div className="player-container">
          {playersInfo.map((player) => (
            <Players
              player={player}
              key={player.id}
              handleAddPlayer={handleAddPlayer}
            ></Players>
          ))}
        </div>
        <div className="cart-container">
          <Cart players={players}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
