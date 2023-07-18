import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { BASE_URL } from "./globals/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${BASE_URL}`} element={<Home />}></Route>
        <Route path={`${BASE_URL}/:category`} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
