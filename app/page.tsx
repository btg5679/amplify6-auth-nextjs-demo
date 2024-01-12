import { fetchAuthSession } from "aws-amplify/auth/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import React from "react";
import { runWithAmplifyServerContext } from "./util/amplify-server-util";

export default async function AppPage() {
  const synth = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const accessToken = (
          await fetchAuthSession(contextSpec)
        ).tokens?.accessToken.toString();
        return getResource(resource.id, accessToken);
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (!synth) {
    return notFound();
  }

  return <></>;
}
