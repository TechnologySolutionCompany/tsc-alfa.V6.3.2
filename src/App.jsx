import "./styles/globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar      from "./components/Navbar";
import Footer      from "./components/Footer";
import Home        from "./pages/Home";
import Servicos    from "./pages/Servicos";
import Sobre       from "./pages/Sobre";
import Agendamento from "./pages/Agendamento";

function Router() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const routes = {
    "/":            <Home />,
    "/servicos":    <Servicos />,
    "/sobre":       <Sobre />,
    "/agendamento": <Agendamento />,
  };
  return routes[path] ?? <Home />;
}

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main><Router /></main>
      <Footer />
    </ThemeProvider>
  );
}
