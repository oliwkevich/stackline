import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About/About"
import { Auth } from "./pages/Auth/Auth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
