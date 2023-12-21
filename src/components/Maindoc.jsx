import React from "react";
import BigCard from "./Bigcard";
import TopCollection from "./TopCollection";
import TrendingNft from "./TrendingNft";
import NewNft from "./NewNft";
import History from "./History";

const Maindoc = () => {
  return (
    <div>
      <div className="sm:mt-9 mt-3">
        <div className="row">
          <div className=" lg:w-8/12 w-full px-3">
            <BigCard />
            <TopCollection />
            <TrendingNft />
          </div>
          <div className="lg:w-4/12 w-full px-3 mt-8 lg:mt-0">
            <NewNft />
            <History />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindoc;
