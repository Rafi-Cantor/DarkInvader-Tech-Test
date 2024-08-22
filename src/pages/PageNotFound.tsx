import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default PageNotFound;
