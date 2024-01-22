import "./App.css";

export const BlankSquare = ({
  height = 20,
  width = 29,
  bottom = 0,
  display = true,
}) => {
  const divStyles = {
    height: height + "px",
    width: width + "px",
    bottom: bottom + "px",
    display: display ? "block" : "none",
  };
  return <div style={divStyles} className={"blankSquare"} />;
};
