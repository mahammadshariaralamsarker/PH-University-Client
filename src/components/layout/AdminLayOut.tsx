import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayOut() {
  return (
    <div>
      <h1> AdminLayOut pages navbar</h1>
      <Outlet />
    </div>
  );
}
