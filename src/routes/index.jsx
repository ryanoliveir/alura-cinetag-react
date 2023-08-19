import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Favorites from "@pages/Favorites";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Container from "@components/Container";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>;
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
