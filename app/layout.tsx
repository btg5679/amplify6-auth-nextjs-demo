import ConfigureAmplifyClientSide from "./components/client/configure-amplify-client-side";
import React from "react";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <main>
          <ConfigureAmplifyClientSide />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
