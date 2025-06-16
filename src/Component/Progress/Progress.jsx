import ProgressBar from "react-bootstrap/ProgressBar";
export function Mprog({ name, now }) { 
    return (
      <div style={{ marginBottom: "10px" }}>
        <ProgressBar now={now} label={name} />
      </div>
    );
  }