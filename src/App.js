import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Auth } from "./pages/Auth/Auth";
import { Page404 } from "./pages/404/Page404";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Auth />} />
          <Route path="page404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="page404" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
