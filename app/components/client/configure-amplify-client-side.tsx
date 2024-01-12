"use client";

import { Amplify, ResourcesConfig } from "aws-amplify";
import { fetchAuthSession } from "aws-amplify/auth";
import { amplifyConfig } from "../../config/amplify-config";

Amplify.configure(amplifyConfig as ResourcesConfig, {
  ssr: true,
  API: {
    REST: {
      headers: async () => {
        const tokens = (await fetchAuthSession()).tokens;
        const cognitoToken = tokens?.accessToken?.toString();
        const idpToken = tokens?.idToken?.toString();
        return { Authorization: cognitoToken || idpToken || "" };
      },
    },
  },
});

export default function ConfigureAmplifyClientSide() {
  return null;
}
