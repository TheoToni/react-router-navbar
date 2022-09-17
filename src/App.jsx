import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Views from "./Views";

function App() {
  return (
    <BrowserRouter>
      <Views></Views>
    </BrowserRouter>
  );
}

export default App;
