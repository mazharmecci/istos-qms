import { useState } from "react";
import { apiRequest } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateQuote() {
  const [client_name, setClientName] = useState("");
  const [total_amount, setTotalAmount] = useState("");
  const navigate = useNavigate();

  async function submitQuote(e) {
    e.preventDefault();
    await apiRequest("/quotes", "POST", { client_name, total_amount });
    navigate("/quotes");
  }

  return (
    <div>
      <h2>Create Quotation</h2>
      <form onSubmit={submitQuote}>
        <input placeholder="Client Name"
          value={client_name} onChange={(e) => setClientName(e.target.value)} />
        <input placeholder="Total Amount"
          type="number" value={total_amount} onChange={(e) => setTotalAmount(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
