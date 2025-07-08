    // src/authConfig.js
    export const msalConfig = {
      auth: {
        clientId: "c40312e1-e8f5-48b4-8396-31635de82be6",
        authority: "https://login.microsoftonline.com/4a402691-f5fe-4125-b95b-34f6db5c9ad1",
        redirectUri: "http://localhost:3000, https://reactapp2-a3bhanbrcmhbdce0.canadacentral-01.azurewebsites.net", // or your app's redirect URI
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
