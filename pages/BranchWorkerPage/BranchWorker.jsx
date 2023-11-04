import React from "react";
import "./BranchWorker.css";
import TopBar from "../../components/BranchWorkerComponents/TopBar";
import LeftBar from "../../components/BranchWorkerComponents/LeftBar";
import Center from "../../components/BranchWorkerComponents/Center";

const BranchWorker = () => {
  return (
    <>
      <TopBar titleName="Branch Worker" />
      <div className="content">
        <LeftBar />
        <Center />
      </div>
    </>
  );
};

export default BranchWorker;
