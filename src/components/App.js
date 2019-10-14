import React from "react";
import Picture from "./Picture";
import Text from "./Text";
import "../css/components/_webpage.scss";
const App = () => {
  return (
    <div className="webpage">
      <div className="topContainers">
        <Picture />
        <Text />
      </div>
    </div>
  );
};

export default App;
