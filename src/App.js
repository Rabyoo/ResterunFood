import { Fragment } from "react";
import "./App.css";
import HomePage from "./component/Home/HomePage";
import Navs from "./component/Navs/Navs.js";

function App() {
  return (
    <Fragment>
      <Navs />
      <HomePage />
    </Fragment>
  );
}

export default App;
