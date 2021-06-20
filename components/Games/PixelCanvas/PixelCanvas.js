import React, { useState } from "react";
// import "./styles.css";

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PixelCanvas = () => {
  const [heldColor, setHeldColor] = useState("none");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    setMousePos({ x: e.nativeEvent.x, y: e.nativeEvent.y });
  };
  return (
    <div className="pixel-canvas" onMouseMove={onMouseMove}>
      <p style={{ color: "black" }}>
        TO-DO: Have a picture here that the user is trying to recreate
      </p>
      <p className={heldColor} style={{ color: "black" }}>
        {heldColor}
      </p>
      <p className={heldColor} style={{ color: "black" }}>
        {mousePos.x},{mousePos.y}
      </p>
      {/* <div className={"dual-grid"}> */}
      <div className="pixel-canvas--canvas">
        {squares.map((square_i) => {
          return squares.map((square_j) => {
            return (
              <CanvasSquare
                key={square_j}
                index={square_i * square_j}
                heldColor={heldColor}
              />
            );
          });
        })}
      </div>
      <ColorPalette setHeldColor={setHeldColor} mousePos={mousePos} />
      {/* </div> */}
    </div>
  );
};

/**GRID COMPONENTS */
const CanvasSquare = ({ index, heldColor }) => {
  const [color, setColor] = useState("white");
  const handleDrop = (color) => {
    if (heldColor !== "none") {
      // setColor(color);
    }
  };
  return (
    <div
      id={`square-${index}`}
      className={`pixel-canvas--canvas--square square ${color}`}
      onClick={() => handleDrop(heldColor)}
    >
      {index}
    </div>
  );
};

/**PALETTE COMPONENTS */
const ColorPalette = ({ setHeldColor, mousePos }) => {
  return (
    <div className="pixel-canvas--color-palette">
      {[1].map((entry) => (
        <React.Fragment key={entry}>
          <PaletteColor
            color="white"
            setHeldColor={setHeldColor}
            mousePos={mousePos}
          />
          <PaletteColor
            color="red"
            setHeldColor={setHeldColor}
            mousePos={mousePos}
          />
          <PaletteColor
            color="green"
            setHeldColor={setHeldColor}
            mousePos={mousePos}
          />
          <PaletteColor
            color="blue"
            setHeldColor={setHeldColor}
            mousePos={mousePos}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

const PaletteColor = ({ color, setHeldColor, mousePos }) => {
  const [isHeld, setIsHeld] = useState(false);
  const [wasHeld, setWasHeld] = useState(false);
  const [droppedPos, setDroppedPos] = useState({ x: 0, y: 0 });
  const handleHold = (e) => {
    // console.log("handleHold e", e);
    if (isHeld) {
      setIsHeld(false);

      const { clientX, clientY } = e.nativeEvent;
      const elementsHovered = document.elementsFromPoint(clientX, clientY);
      const classesHovered = elementsHovered.map((elem) => elem.className);
      const inCanvas = classesHovered.includes("pixel-canvas--canvas");

      if (inCanvas) {
        const square = elementsHovered.filter((elem) => {
          return elem.className === "pixel-canvas--canvas--square white";
        })[0];

        const { offsetLeft, offsetTop } = square;

        //releasing
        setWasHeld(true);
        setDroppedPos({ x: offsetLeft, y: offsetTop });
        // setHeldColor("none");
      }
    } else {
      setIsHeld(true);
      setHeldColor(color);
    }
  };
  return (
    <div
      className={`pixel-canvas--color-palette--color ${color} ${
        isHeld ? "held" : wasHeld ? "released" : "not-held"
      }`}
      style={
        isHeld
          ? {
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }
          : wasHeld
          ? {
              left: `${droppedPos.x}px`,
              top: `${droppedPos.y}px`,
            }
          : undefined
      }
      onClick={handleHold}
    ></div>
  );
};
