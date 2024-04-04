import React from "react";
import BarChart from "../../components/bar-chart";
import PieChart from "../../components/pie-cart";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <BarChart />
      <PieChart />
    </div>
  );
}

export default Dashboard;
