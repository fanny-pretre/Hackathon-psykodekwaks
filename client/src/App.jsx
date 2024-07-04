import { Outlet } from "react-router-dom";

import Menu from "./components/Menu/Menu";

function App() {
  return (
    <main className="container">
      <Menu />
      <Outlet />
    </main>
  );
}

export default App;
