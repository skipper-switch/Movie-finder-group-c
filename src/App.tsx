import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import DetailsPage from "./pages/Details";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components";
import MoviesPage from "./pages/Movies/Index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/details/:id" element={<DetailsPage />} />

            <Route path="/movie/:id" element={<MoviesPage />} />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
