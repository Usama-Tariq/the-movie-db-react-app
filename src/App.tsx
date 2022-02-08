import React from "react";
import { Provider } from "react-redux";

import NavBar from "./components/navbar/components/NavBar";
import Routing from "./components/Routing";
import { store } from "./redux/store/index";

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routing />
      </Provider>
    </>
  );
}

export default App;
