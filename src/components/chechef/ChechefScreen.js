import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

const ChechefScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(startLogout());
  };

  return (
    <div>
      <h1>ChechefScreen</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ChechefScreen;
