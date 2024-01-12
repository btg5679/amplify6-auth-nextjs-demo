import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { Amplify, ResourcesConfig } from "aws-amplify";
import { amplifyConfig } from "../config/amplify-config";

Amplify.configure(amplifyConfig as ResourcesConfig, {});

export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig,
});
