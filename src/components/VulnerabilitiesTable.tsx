import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVulnerabilities } from "../apis/vulnerabilitiesApis";
import dayjs from "dayjs";
import { VulnerabilityType } from "../types/VulnerabilityTypes";

function VulnerabilitiesTable() {
  const [vulnerabilities, setTVulnerabilities] = useState<VulnerabilityType[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getVulnerabilities()
      .then((response) => {
        setTVulnerabilities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Created At</th>
                  <th>Severity</th>
                  <th>More Info</th>
                </tr>
              </thead>
              <tbody>
                {vulnerabilities.map((vulnerability: VulnerabilityType) => (
                  <tr key={vulnerability.uuid}>
                    <td data-cell={"Name:"}>{vulnerability.name}</td>
                    <td data-cell={"Created At:"}>
                      {dayjs(vulnerability.created_at).format(
                        "MMMM D, YYYY h:mm A"
                      )}
                    </td>
                    <td data-cell={"Severity:"}>{vulnerability.severity}</td>
                    <td data-cell={"More Info:"}>
                      <Link
                        to={`/vulnerabilities/${vulnerability.uuid}`}
                        state={{ vulnerability: vulnerability }}
                      >
                        More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default VulnerabilitiesTable;
