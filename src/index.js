import React from "react";
import ReactDOM from "react-dom/client";
import FirstClassComponents from "./Components/FirstClassComponents";


const App = () => {
  return (
    <div>
      <FirstClassComponents />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
