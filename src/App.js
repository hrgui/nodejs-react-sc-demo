/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Html from "./Html";
// import Spinner from "./Spinner";

export default function App({ assets }) {
  return (
    <Html assets={assets} title="Hello">
      <Suspense fallback={"Loading"}>
        <ErrorBoundary FallbackComponent={"Error"}>
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return <div>Hello World</div>;
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}
