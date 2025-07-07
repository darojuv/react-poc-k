import SpaceMissionDetails from "./screens/SpaceMissionDetails";
import { StrictMode } from "react";

import "./App.css";

function App() {
  return (
    <StrictMode>
      <div className="app-bg">
        <SpaceMissionDetails />
      </div>
    </StrictMode>
  );
}

export default App;