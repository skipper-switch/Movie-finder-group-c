import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";

import Details from "./pages/details";

import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
