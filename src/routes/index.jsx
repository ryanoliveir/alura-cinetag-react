import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Favorites from "@pages/Favorites";
import Player from "@pages/Player";
import NotFoundPage from "@pages/404";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Container from "@components/Container";
import { FavoritesProvider } from "../contexts/Favorites";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
