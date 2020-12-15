import React, { useState } from "react";

import Login from "./Login";

function Admin() {
  const [admin, setAdmin] = useState(false);

  return admin ? (
    <h1>Bonjour administrateur</h1>
  ) : (
    <Login setAdmin={setAdmin} />
  );
}

export default Admin;
