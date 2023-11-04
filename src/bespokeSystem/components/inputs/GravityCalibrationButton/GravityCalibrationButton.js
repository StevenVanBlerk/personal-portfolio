import { useState, useEffect } from "react";
import { Typography } from "@/bespokeSystem/components";
import { GravityButton } from "./GravityButton";
import { TestComponent } from "./TestComponent/TestComponent";
const DRGColors = { yellow: "##FFB401", darkGreen: "#152E1F" };

const messages = ["Hold onto your butts, commencing gravity calibration."];
export const GravityCalibrationButton = ({ }) => {
  const message = messages[0];

  const [partialMessage, setPartialMessage] = useState("");
  const [isNoticeDisplayed, setIsNoticeDisplayed] = useState(false);
  //   const [partialMessageIndex, setPartialMessageIndex] = useState(0);

  const typeWriterEffect = (index) => {
    const typingDelay = 50;
    const closingDelay = 3000;

    if (index === 0) {
      setIsNoticeDisplayed(true);
    }
    if (index < message.length) {
      setPartialMessage(
        (prevState) => (prevState = message.slice(0, index + 1))
      );

      setTimeout(() => typeWriterEffect(index + 1), typingDelay);
    } else {
      setTimeout(() => {
        setIsNoticeDisplayed(false);
      }, closingDelay);
    }
  };

  useEffect(() => {
    if (isNoticeDisplayed === true) typeWriterEffect(0);
  }, [isNoticeDisplayed]);

  return (
    <>
      {/* Notice */}

      <div
        style={{
          display: isNoticeDisplayed ? "initial" : "none",
          // background: DRGColors.darkGreen,
          background: `linear-gradient(to bottom, rgba(21, 46, 31, 1), rgba(21, 46, 31, 0.1))`,
          // background: `linear-gradient(to bottom, rgba(21, 46, 31, 1), rgba(21, 46, 31, 1) 25%, rgba(21, 46, 31, 0) 75%, rgba(21, 46, 31, 0.1) 0%)`,
          width: "100%",
          maxWidth: "650px",
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: "100",
          marginTop: "100px",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: "8px 8px 8px 60px",
            textAlign: "left",
          }}
        >
          <img
            src="images/Mission control - bordered.png"
            style={{
              position: "absolute",
              width: "120px",
              left: "0%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <h1 style={{ color: DRGColors.yellow }}>MISSION CONTROL</h1>
          <Typography style={{ color: "white" }}>{partialMessage}</Typography>
        </div>
      </div>

      {/* Button */}
      <GravityButton
        onClick={() => setIsNoticeDisplayed(true)}
        disabled={isNoticeDisplayed}
      />
      <TestComponent />
    </>
  );
};

/*TO-DO:
- make this responsive
*/