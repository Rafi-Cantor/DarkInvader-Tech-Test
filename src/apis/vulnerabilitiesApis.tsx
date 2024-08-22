import axios from "axios";

export const getVulnerabilities = async () => {
    const { data } = await axios.get(`src/apis/vulnerabilities.json`);
    return data;
  };
  
