import { ResourcesConfig } from "aws-amplify";

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: config.cognito.USER_POOL_ID || "",
      userPoolClientId: config.cognito.APP_CLIENT_ID || "",
      identityPoolId: config.cognito.IDENTITY_POOL_ID || "",
      signUpVerificationMethod: "code",
      allowGuestAccess: true,
      region: config.cognito.REGION,
      loginWith: {
        oauth: {
          domain: config.cognito.oauth.DOMAIN_NAME || "", // amplify app domain
          scopes: [
            "phone",
            "email",
            "profile",
            "aws.cognito.signin.user.admin",
            "openid",
          ],
          redirectSignIn: [
            "http://localhost:4200/auth-redirect",
            config.cognito.oauth.REDIRECT_SIGN_IN || "",
          ],
          redirectSignOut: [
            "http://localhost:4200/",
            config.cognito.oauth.REDIRECT_SIGN_OUT || "",
          ],
          responseType: "code",
          providers: ["Google"],
        },
      },
    },
  },
  API: {
    REST: {
      users: {
        endpoint: config.apiGateway.URL || "",
        region: config.apiGateway.REGION,
      },
    },
  },
} as ResourcesConfig;
