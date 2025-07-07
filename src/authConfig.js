    // src/authConfig.js
    export const msalConfig = {
      auth: {
        clientId: "3e90e5fe-3888-48bc-b687-2a4c875ae681",
        authority: "https://login.microsoftonline.com/4a402691-f5fe-4125-b95b-34f6db5c9ad1",
        redirectUri: "http://localhost:3000", // or your app's redirect URI
      },
      cache: {
        cacheLocation: "localStorage", // or sessionStorage
        storeAuthStateInCookie: false,
      },
    };

    export const loginRequest = {
      scopes: ["User.Read"], // Example scope
    };

    //https://sts.windows.net/4a402691-f5fe-4125-b95b-34f6db5c9ad1/v2.0