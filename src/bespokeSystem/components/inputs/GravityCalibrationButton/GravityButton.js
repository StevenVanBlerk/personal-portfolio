import { DRGColors } from "./DRGConstants";
const MiniButton = () => {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        background: DRGColors.red,
        borderRadius: "2px",
      }}
    />
  );
};
export const GravityButton = (props) => {
  return (
    <div>
      <h1 style={{ color: DRGColors.red }}>DANGER</h1>
      <h2 style={{ color: DRGColors.yellow }}>Calibrate gravity</h2>
      <button
        style={{
          width: "100px",
          height: "150px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "auto",
          alignItems: "center",
          placeItems: "center",
          background: DRGColors.charcoal,
          borderRadius: "2px",
          boxShadow: "none",
        }}
        {...props}
      >
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
        <MiniButton />
      </button>
      <h3 style={{ color: DRGColors.red }}>DON'T TOUCH</h3>
    </div>
  );
};
