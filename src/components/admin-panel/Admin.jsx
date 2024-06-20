import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Settings from "./Settings";
import AdminNavbar from "./AdminNavbar";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Admin;
