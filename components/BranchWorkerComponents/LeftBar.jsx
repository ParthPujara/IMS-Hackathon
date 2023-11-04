import React from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div className="left-bar d-flex flex-column justify-content-start align-items-center">
        <Link to="/branch-worker/pen">
          <div className="left-item">Pen</div>
        </Link>
        <Link to="/branch-worker/pencil">
          <div className="left-item">Pencil</div>
        </Link>
    </div>
  );
};

export default LeftBar;
