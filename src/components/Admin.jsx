import React, { useState } from "react";

import Login from "./Login";
import Backoffice from "./Backoffice";

function Admin() {
  const [admin, setAdmin] = useState("no");

  return admin === "yes" ? <Backoffice /> : <Login setAdmin={setAdmin} />;
}

export default Admin;
