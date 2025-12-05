import { useEffect, useState } from "react";
import { apiRequest } from "../api";

export default function Quotations() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    apiRequest("/quotes")
      .then((data) => setQuotes(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Quotations</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Client</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q, i) => (
            <tr key={i}>
              <td>{q.client_name}</td>
              <td>{q.status}</td>
              <td>{q.total_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
