export default function TryFlex() {
  return (
    <div className="row" style={{ flex: "1" }}>
      <div className="col" style={{ flex: "8" }}>
        <div className="row" style={{ flex: "4" }}>
          <div className="coli" style={{ flex: "1" }}></div>
          <div className="coli" style={{ flex: "3" }}></div>
        </div>
        <div className="rowi" style={{ flex: "4" }}></div>
        <div className="rowi" style={{ flex: "2" }}></div>
      </div>
      <div className="coli" style={{ flex: "2" }}></div>
    </div>
  );
}
