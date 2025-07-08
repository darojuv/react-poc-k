import SpaceMissionDetails from "./screens/SpaceMissionDetails";
import { StrictMode } from "react";

import "./App.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

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
