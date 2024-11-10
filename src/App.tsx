import { ModalProvider } from "./hooks/ModalContextType";
import { MenssageProvider } from "./hooks/LocalContext";
import RegistrationForm from "./components/RegistrationForm";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./components/ShoppingCart";
import Buy from "./pages/Buy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ModalProvider>
        <MenssageProvider>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/buy" element={<Buy />} />
          </Routes>
          <RegistrationForm />
          <ToastContainer />
          <ShoppingCart />
        </MenssageProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
