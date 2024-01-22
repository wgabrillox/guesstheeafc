import "./App.css";
import { players, filters } from "./mockdata.js";
import { useState } from "react";
import { GuessShield } from "./guessShield.js";
import { GuessSection } from "./guessSection.js";
function App() {
  const [playerGuessed, setPlayerGuessed] = useState(false);
  const [player, setPlayer] = useState(
    players.items[Math.floor(Math.random() * 100)]
  );

  console.log("player", player);

  return (
    <div className="App">
      <div className={"wrapper"}>
        <div className={"player"}>
          <div className={"shield"}>
            {playerGuessed ? (
              <img
                className="revealShield fade-in-shield"
                src={`${player.shieldUrl}`}
                alt="shield icon"
              />
            ) : (
              <GuessShield player={player} />
            )}
          </div>
          <div
            className="randomButton"
            onClick={() =>
              setPlayer(players.items[Math.floor(Math.random() * 100)])
            }
          >
            RANDOM
          </div>
        </div>
        <GuessSection
          player={player}
          playerGuessed={(guessed) => setPlayerGuessed(guessed)}
        />
        <div className={"stats"}></div>
      </div>
    </div>
  );
}

export default App;
