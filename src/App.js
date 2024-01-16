import logo from "./logo.svg";
import "./App.css";
import { players, filters } from "./mockdata.js";
import Select, { StylesConfig } from "react-select";
import goldRare from "./images/shields/rare_gold.png";
import { BlankSquare } from "./blankSquare.js";
import { useState } from "react";

function App() {
  // console.log("players", plxxayers);
  const player = players.items[0];
  const playerStats = player.stats;

  const dropdownOptions = players.items.reduce(
    (acc, curr) => {
      const player = `${curr.firstName} ${curr.lastName}`;
      acc.players = [...acc.players, { value: player, label: player }];
      return acc;
    },
    { players: [] }
  );

  const playerOptionStyles = {
    control: (styles) => ({ ...styles, width: "200px" }),
    option: (styles) => ({ ...styles, color: "black" }),
  };

  console.log("player", player);

  const playerGuessed = true;

  const StatsColumn = ({ name, number }) => (
    <div className={"statsColumn"}>
      <div className={"statName"}>{name}</div>
      <div className={"statNumber"}>{number}</div>
      <BlankSquare bottom={"3"} />
    </div>
  );

  return (
    <div className="App">
      <div className={"wrapper"}>
        <div className={"player"}>
          <div className={"shield"}>
            {/* {playerGuessed ? (
              <img
                className={"revealShield"}
                src={`${items.shieldUrl}`}
                alt="shield icon"
              />
            ) : (
              <img
                className={"emptyShield"}
                src={goldRare}
                height={420}
                width={310}
                alt="shield"
              />
            )} */}
            <img
              className={"revealShield"}
              src={`${player.shieldUrl}`}
              alt="shield icon"
            />
            <div className={"guessWrapper"}>
              <img
                className={"emptyShield"}
                src={goldRare}
                height={420}
                width={310}
                alt="shield"
              />
              <div>
                <div className={"overallNumberValue"}>
                  {player.overallRating}
                </div>
                <div className={"overallNumberBlocker"}>
                  <BlankSquare height="35" width="35" />
                </div>
              </div>
              <div>
                <div className={"playerPositionValue"}>
                  {player.position.shortLabel}
                </div>
                <div className={"playerPositionBlocker"}>
                  <BlankSquare />
                </div>
              </div>
              <div className={"statsSection"}>
                <StatsColumn name={"PAC"} number={playerStats.pac.value} />
                <StatsColumn name={"SHO"} number={playerStats.sho.value} />
                <StatsColumn name={"PAS"} number={playerStats.pas.value} />
                <StatsColumn name={"DRI"} number={playerStats.dri.value} />
                <StatsColumn name={"DEF"} number={playerStats.def.value} />
                <StatsColumn name={"PHY"} number={playerStats.phy.value} />
              </div>
              <div className={"bottomSection"}>
                <div className="flag">
                  <BlankSquare width="30" />
                </div>
                <div className="league">
                  <BlankSquare width="30" />
                </div>
                <div className="club">
                  <BlankSquare width="30" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"inputWrapper"}>
          <div className={"inputField"}>
            <Select
              options={dropdownOptions.players}
              styles={playerOptionStyles}
              placeholder={"Insert Player name"}
            />
          </div>
        </div>
        <div className={"stats"}></div>
      </div>
    </div>
  );
}

export default App;
