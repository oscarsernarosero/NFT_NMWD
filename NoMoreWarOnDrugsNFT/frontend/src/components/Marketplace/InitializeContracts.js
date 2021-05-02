import React from "react";


export function InitializeContracts({updateNMWDContract, transferOwnership, 
    NFTAddress, MarketplaceAddress}) {

async function initialize(){
    await updateNMWDContract(NFTAddress);
    await transferOwnership(MarketplaceAddress);
}
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
        </div>
        <div className="col-6 p-4 text-center">
          <p> WARNING: ONLY USE THIS ONCE!</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={initialize}
          >
            Initialize Contratcs
          </button>
        </div>
      </div>
    </div>
  );
}
