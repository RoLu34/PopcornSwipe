import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Layout from "./pages/Layout.jsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout /> }>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;                                                                                                                                                                                                                                                                                                                                                 