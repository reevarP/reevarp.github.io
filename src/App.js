import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routingArray } from "./Services/constants";

function App() {
  return (
    <Routes>
      {routingArray.map((curElem) => {
        return <Route path={curElem.path} element={curElem.element} />;
      })}
    </Routes>
  );
}

export default App;
