import SpaceMissionDetails from "./screens/SpaceMissionDetails";
import { StrictMode } from "react";

import "./App.css";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>

      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        {/* Your "not signed in" static page content goes here */}
        <h1>Please sign in to access this application.</h1>
        {/* Add a sign-in button here */}
      </UnauthenticatedTemplate>
    </MsalProvider>
        <StrictMode>
          <div className="app-bg">
            <SpaceMissionDetails />
          </div>
        </StrictMode>  
  );
}

export default App;
