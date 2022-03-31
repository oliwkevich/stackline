import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About/About";
import { Auth } from "./pages/Auth/Auth";
import { Page404 } from "./pages/404/Page404";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/page404" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
