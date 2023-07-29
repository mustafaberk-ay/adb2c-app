import { PublicClientApplication, AccountInfo, AuthenticationResult } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: 'YOUR_APPLICATION_ID', // Replace with your Azure AD B2C application ID
    authority: 'https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/B2C_1_signupsignin/', // Replace with your Azure AD B2C policy URL
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage', // You can use 'localStorage' as well
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export const login = async (): Promise<void> => {
  try {
    const loginResult: AuthenticationResult = await msalInstance.loginPopup();
    console.log('Login successful:', loginResult.account);
  } catch (error) {
    console.log('Login error:', error);
  }
};

export const logout = (): void => {
  msalInstance.logoutPopup();
};

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const account: AccountInfo | null = msalInstance.getActiveAccount();
    if (!account) throw new Error('No active account.');
    const request = {
      scopes: ['openid', 'profile', 'your-api-scope'], // Replace 'your-api-scope' with the required API scope
      account,
    };
    const response: AuthenticationResult = await msalInstance.acquireTokenSilent(request);
    return response.accessToken;
  } catch (error) {
    console.log('Get access token error:', error);
    return null;
  }
};
