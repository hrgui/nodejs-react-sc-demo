/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";
import Html from "../src/Html";

// In a real setup, you'd read it from webpack build stats.
let assets = {
  "main.js": "/main.js",
  "main.css": "/main.css",
};

module.exports = function render(url, res) {
  // The new wiring is a bit more involved.
  res.socket.on("error", (error) => {
    console.error("Fatal", error);
  });
  let didError = false;
  const { pipe } = renderToPipeableStream(
    <Html>
      <App assets={assets} />
    </Html>,
    {
      bootstrapScripts: [assets["main.js"]],
      onShellReady() {
        // The content above all Suspense boundaries is ready.
        // If something errored before we started streaming, we set the error code appropriately.
        res.statusCode = didError ? 500 : 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError(x) {
        didError = true;
        console.error(x);
      },
    }
  );
};
