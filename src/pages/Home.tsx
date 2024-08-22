import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Click to view vulnerabilities:</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/vulnerabilities">vulnerabilities</Link>
      </div>
    </>
  );
}

export default Home;
