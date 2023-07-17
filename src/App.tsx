import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:category" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
