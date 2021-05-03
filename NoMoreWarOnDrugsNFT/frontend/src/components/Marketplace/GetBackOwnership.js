import React from "react";

export function GetBackOwnership({getBackOwnership}) {
  return (
    <div className="container">
      <div className="justify-content-md-center">
        <div className="text-center">
        </div>
        <div className="text-center">
          <p> WARNING: ONLY USE THIS BUTTON IN CASE OF EMERGENCY</p>
          <button
            className="btn-warning"
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
