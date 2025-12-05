const API_BASE = "http://localhost:5000/api"; // Update to hosting URL in production

export async function apiRequest(path, method = "GET", body = null, auth = true) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = localStorage.getItem("token");
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Quotations from "./pages/Quotations";
import CreateQuote from "./pages/CreateQuote";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/quotes" element={<PrivateRoute><Quotations /></PrivateRoute>} />
        <Route path="/create-quote" element={<PrivateRoute><CreateQuote /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
