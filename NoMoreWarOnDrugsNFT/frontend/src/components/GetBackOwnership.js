import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function GetBackOwnership({getBackOwnership}) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
        </div>
        <div className="col-6 p-4 text-center">
          <p> WARNING: ONLY USE THIS BUTTON IN CASE OF EMERGENCY</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={getBackOwnership}
          >
            Get Back Ownership
          </button>
        </div>
      </div>
    </div>
  );
}
