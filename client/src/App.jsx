
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <main>
      <nav className="flex gap-10 justify-center">
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">logout</Link>
      </nav>
      <p>Vous êtes connecté {currentUser?.firstname}</p>
      <Outlet context={{ currentUser, setCurrentUser }} />
    </main>
  );
}

export default App;
