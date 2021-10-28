#!/usr/bin/env node
/* eslint-disable no-console */
import { createServer } from "http";

import { makeApp } from "./app";

// @ts-ignore
const packageJson = require("../../../package.json");

async function main() {
  // Create HTTP server
  const httpServer = createServer();

  // Make application
  const app = await makeApp({ httpServer });

  // Add application to HTTP server
  httpServer.addListener("request", app);

  // And finally, we open the listen port
  const PORT = parseInt(process.env.PORT || "", 10) || 3000;
  httpServer.listen(PORT, () => {
    const address = httpServer.address();
    const actualPort: string =
      typeof address === "string"
        ? address
        : address && address.port
        ? String(address.port)
        : String(PORT);
    console.log(`${packageJson.name} listening on port ${actualPort}`);
    console.log(`Site: ${`http://localhost:${actualPort}`}`);
    console.log(`GraphiQL: ${`http://localhost:${actualPort}/graphiql`}`);
  });
}

main().catch((e) => {
  console.error("Fatal error occurred starting server!");
  console.error(e);
  process.exit(101);
});
