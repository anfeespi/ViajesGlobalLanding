import { useModal } from "../hooks/ModalContextType";
import { useContext, useState } from "react";
import { MenssageContext } from "../hooks/LocalContext";
import { useNavigate, Link } from "react-router-dom";
import { toastSuccess } from "../hooks/ToastNotification";

export default function Login() {
  const navigate = useNavigate();
  const { openModalRegistration } = useModal();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const contexto = useContext(MenssageContext);

  const asignUser = () => {
    if (contexto && email !== "") {
      contexto.setActiveUser(email);
    } else {
      console.warn("El contexto no está disponible o el email está vacío.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor, ingrese su correo y contraseña.");
      return;
    }
    toastSuccess("Sesión exitosa");
    asignUser();
    navigate("/home");
  };

  return (
    <div className="bg-[url('../img/Cielo.png')] bg-cover bg-center h-screen flex justify-center items-center w-full">
      <div className="bg-white p-8 rounded-xl max-w-sm w-full">
        <Link
          to="/home"
          className="flex flex-row gap-x-2 items-center text-black font-semibold mb-3"
        >
          <img src="../img/FlechaAtras.png" alt="flecha" className="h-7 w-7" />
          Volver
        </Link>
        <img
          src="../public/img/Logo.png"
          alt="Logo viajes global"
          className="mb-2"
        />
        <h1 className="block text-xl text-black font-bold text-center mb-5">
          ¡Bienvenido a viajes global!
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-black font-semibold mb-3"
            >
              Correo
            </label>
            <input
              className="text-lg w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-black font-semibold mb-3"
            >
              Contraseña
            </label>
            <input
              className="text-lg w-full px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5fbfe0]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5fbfe0] text-white px-4 py-2 rounded-lg hover:bg-[#24728b]"
          >
            Iniciar sesión
          </button>
        </form>
        <h2 className="mt-4">
          Si no tienes cuenta{" "}
          <button className="text-[#5fbfe0]" onClick={openModalRegistration}>
            Regístrate
          </button>
        </h2>
      </div>
    </div>
  );
}
