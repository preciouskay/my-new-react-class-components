import React from "react";
import ReactDOM from "react-dom/client";
import FirstClassComponents from "./Components/FirstClassComponents";
// import { FirstStateElement } from "./Components/FirstStateElement";
// import { Counter } from "./Components/Counter";
const App = () => {
  return (

// {/* <div><Counter/></div> */}
    // <div><FirstStateElement week ="monday"/></div>
    <div>
      <FirstClassComponents />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
