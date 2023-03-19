import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <a
        onClick={() => {
          console.log("clicked minus");
          dispatch(decNumber());
        }}
        style={{
          cursor: "pointer",
          pointerEvents: myState === 0 ? "none" : "auto",
        }}
      >
        -
      </a>{" "}
      <span>
        <input value={myState} />
      </span>
      <a
        onClick={() => {
          console.log("clicked plus");
          dispatch(incNumber());
        }}
        style={{ cursor: "pointer" }}
      >
        +
      </a>{" "}
    </div>
  );
};

export default App;
