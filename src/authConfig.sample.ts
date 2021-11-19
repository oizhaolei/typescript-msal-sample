import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
    auth: {
        clientId: "xxxxxxxx-xx8b-4x4c-bdxx-a0dbfx87781x",
        authority: "https://login.microsoftonline.com/cxaaf0cb-e80c-4x1x-a1c8-04acb8aefxxc",
        redirectUri: "http://localhost:3000/",
        postLogoutRedirectUri: "/"
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
