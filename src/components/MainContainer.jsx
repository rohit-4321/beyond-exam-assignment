import React from "react";
import Bottom from "./bottomSection/Bottom";
import { Header } from "./header/Header";

import Middle from "./middleSection/Middle";

function MainContainer() {
  return (
    <div className="MainContainer">
      <Header />
      <Middle />
      <Bottom />
    </div>
  );
}

export default MainContainer;
