import React from "react";
import Screen from "./transScreen";
import Lang from "./context"
import translations from "./translations";

function App() {
  return (
    <Lang defaultLang="en" translation={translations}>
      <Screen />
    </Lang>
  );
}

export default App;
