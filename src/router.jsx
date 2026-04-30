import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;                                                                                                                                                                                                                                                                                                                                                 