import { players, filters } from "./mockdata.js";
import Select from "react-select";
import { useState } from "react";

export const GuessSection = ({ player, playerGuessed }) => {
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const dropdownOptions = players.items.reduce(
    (acc, curr) => {
      const player = `${curr.firstName} ${curr.lastName}`;
      acc.players = [
        ...acc.players,
        { value: player, label: player, id: curr.id },
      ];
      return acc;
    },
    { players: [] }
  );

  const playerOptionStyles = {
    control: (styles) => ({ ...styles, width: "200px" }),
    option: (styles) => ({ ...styles, color: "black" }),
  };

  console.log("wrong guess", wrongGuesses);

  return (
    <>
      <div className={"inputWrapper"}>
        <div className="pastGuesses">
          {wrongGuesses.map((guess) => (
            <div className="incorrectPill" key={guess.label}>
              {guess.label}
            </div>
          ))}
        </div>
        <div className="inputField">
          <Select
            options={dropdownOptions.players}
            styles={playerOptionStyles}
            placeholder="Insert Player name"
            // filterOption={() => {}}
            onChange={(option) => {
              // console.log("player", player);
              // console.log("option", option.id);
              // console.log(player.id === option.id ? "AYY" : "LMAOO");
              player.id === option.id
                ? playerGuessed(true)
                : setWrongGuesses([...wrongGuesses, option]);
            }}
          />
        </div>
      </div>
    </>
  );
};
