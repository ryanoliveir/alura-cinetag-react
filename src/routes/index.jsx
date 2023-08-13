import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Favorites from "@pages/Favorites";
import Footer from '@components/Footer';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;
