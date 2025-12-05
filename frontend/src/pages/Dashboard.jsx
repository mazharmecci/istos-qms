import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/quotes">View Quotations</Link></li>
        <li><Link to="/create-quote">Create New Quotation</Link></li>
      </ul>
    </div>
  );
}
