import { BlankSquare } from "./blankSquare.js";
import { useState } from "react";
import goldRare from "./images/shields/rare_gold.png";
export const GuessShield = ({ player }) => {
  const playerStats = player.stats;

  const updateBoxToggle = (boxLabel) => {
    if (boxToggle[boxLabel] === true) {
      setBoxToggle({ ...boxToggle, [boxLabel]: false });
    }
  };

  const [boxToggle, setBoxToggle] = useState({
    overall: true,
    position: true,
    pac: true,
    sho: true,
    pas: true,
    dri: true,
    def: true,
    phy: true,
    flag: true,
    club: true,
  });

  const StatsColumn = ({ name, number }) => (
    <div className={"statsColumn"} onClick={() => updateBoxToggle(name)}>
      <div className={"statName"}>{name.toUpperCase()}</div>
      <div className={"statNumber"}>{number}</div>
      <BlankSquare bottom={"3"} display={boxToggle[name]} />
    </div>
  );

  return (
    <>
      <div className="guessWrapper">
        <img
          className={"emptyShield"}
          src={goldRare}
          height={420}
          width={310}
          alt="shield"
        />
        <div>
          <div className={"overallNumberValue"}>{player.overallRating}</div>
          <div
            className="overallNumberBlocker"
            onClick={() => updateBoxToggle("overall")}
          >
            <BlankSquare height="35" width="50" display={boxToggle.overall} />
          </div>
        </div>
        <div>
          <div className="playerPositionValue">
            {player.position.shortLabel}
          </div>
          <div
            className="playerPositionBlocker"
            onClick={() => updateBoxToggle("position")}
          >
            <BlankSquare width="50" display={boxToggle.position} />
          </div>
        </div>
        <div className={"statsSection"}>
          <StatsColumn name="pac" number={playerStats.pac.value} />
          <StatsColumn name="sho" number={playerStats.sho.value} />
          <StatsColumn name="pas" number={playerStats.pas.value} />
          <StatsColumn name="dri" number={playerStats.dri.value} />
          <StatsColumn name="def" number={playerStats.def.value} />
          <StatsColumn name="phy" number={playerStats.phy.value} />
        </div>
        <div className={"bottomSection"}>
          <div className="flag" onClick={() => updateBoxToggle("flag")}>
            <img
              className="flagIcon"
              src={`${player.nationality.imageUrl}`}
              alt="flag icon"
            />
            <BlankSquare width="30" display={boxToggle.flag} />
          </div>
          <div className="league">
            <BlankSquare width="30" />
          </div>
          <div className="club" onClick={() => updateBoxToggle("club")}>
            {boxToggle.club ? (
              <BlankSquare width="30" display={boxToggle.club} />
            ) : (
              <img
                className="clubIcon"
                src={`${player.team.imageUrl}`}
                alt="club icon"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
