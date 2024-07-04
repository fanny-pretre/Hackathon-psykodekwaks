import { useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.info({ currentUser });

  return (
    <main>
      <Menu currentUser={currentUser} />
      <Outlet context={{ currentUser, setCurrentUser }} />
    </main>
  );
}

export default App;
