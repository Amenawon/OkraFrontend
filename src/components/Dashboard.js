import TableList from "./TableList";
import "../styles/dashboard.css";
import React, { useEffect, useState } from "react";
import UtilityService from "../shared/utilityService";
function formatHeaders(headers) {
  let newHeaders = Object.keys(headers);
  return newHeaders.map((header) => header.replace("_", " ").toUpperCase());
}

function formatData(data) {
  let rows = [];
  data.forEach((item) => {
    const values = Object.values(item);
    rows.push(values);
  });
  return rows;
}
function Dashboard() {
  const [recommendationRows, setRecommendationRows] = useState([]);
  const [recommendationHeaders, setRecommendationHeaders] = useState([]);

  useEffect(() => {
    let utilityService = new UtilityService();
    let recommendationsResult = utilityService.convertCSVToJSON(
      "../public/data/recommendations-michael.csv"
    );
    if (recommendationsResult && recommendationsResult.length > 0) {
      let headers = formatHeaders(recommendationsResult[0]);
      let rows = [];

      rows = formatData(recommendationsResult);
      setRecommendationHeaders(headers);
      setRecommendationRows(rows);
    }
  }, []);

  return (
    <div className="container">
      <h1 className="dashboard-header"> Dashboard</h1>
      <TableList
        rows={recommendationRows}
        headers={recommendationHeaders}
      ></TableList>
    </div>
  );
}
export default Dashboard;
