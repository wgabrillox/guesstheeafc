import "./App.css";

export const BlankSquare = ({ height = 20, width = 29, bottom = 0 }) => {
  const divStyles = {
    height: height + "px",
    width: width + "px",
    bottom: bottom + "px",
  };
  return <div style={divStyles} className={"blankSquare"} />;
};
