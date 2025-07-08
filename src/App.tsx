import SpaceMissionDetails from "./screens/SpaceMissionDetails";
import { StrictMode } from "react";

import "./App.css";

import { useMsal } from "@azure/msal-react";
import CustomButton from "./Components/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect(); // or loginPopup()
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };
  return (
    <StrictMode>
      <div className="app-bg" style={{ padding: "2rem" }}>
        <h1>Azure AD Login Example</h1>
        {accounts.length > 0 ? (
          <>
            <p>Welcome, {accounts[0].username}!</p>
            <CustomButton
              label="Logout"
              onClick={handleLogout}
              color="error"
              startIcon={<LogoutIcon />}
            />
            {/* Render SpaceMissionDetails after login */}
            <div style={{ marginTop: "2rem" }}>
              <SpaceMissionDetails />
            </div>
          </>
        ) : (
          <CustomButton
            label="Login with Microsoft"
            onClick={handleLogin}
            color="primary"
            startIcon={<LoginIcon />}
          />
        )}
      </div>
    </StrictMode>
  );
}

export default App;
